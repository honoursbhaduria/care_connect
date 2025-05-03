import helpModel from '../models/help.model.js';
import ngoModel from '../models/ngo.model.js';

export const createRequest = async (req, res) => {
  const { title, description, category,  location, time } = req.body;
  
  const newRequest = new helpModel({
    title,
    description,
    category,
    location,
    time,
    
    status: 'open',
    ngo: null
  });
  
  await newRequest.save();
  res.status(201).json(newRequest);
};

// Get all requests created by the logged-in user
export const getMyRequests = async (req, res) => {
  const requests = await helpModel.find({ requester: req.user.id });
  res.json(requests);
};

// Update a request created by the logged-in user
export const updateRequest = async (req, res) => {
  const request = await helpModel.findById(req.params.id);
  
  if (!request || request.requester.toString() !== req.user.id) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  // Don't allow updates to the ngo or status from this endpoint
  const { ngo, status, ...updateData } = req.body;
  
  const updated = await helpModel.findByIdAndUpdate(
    req.params.id, 
    updateData, 
    { new: true }
  );
  
  res.json(updated);
};

// Delete a request created by the logged-in user
export const deleteRequest = async (req, res) => {
  const request = await helpModel.findById(req.params.id);
  
  if (!request || request.requester.toString() !== req.user.id) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  
  await request.deleteOne();
  res.json({ message: 'Request deleted' });
};

// Get request by ID (for both requesters and ngos)
export const getRequestById = async (req, res) => {
  const request = await helpModel.findById(req.params.id)
    .populate('requester', 'name email')
    .populate('ngo', 'name email');
  
  if (!request) {
    return res.status(404).json({ error: 'Request not found' });
  }
  
  // Check if user is either the requester or the ngo
  const isRequester = request.requester._id.toString() === req.user.id;
  const isngo = request.ngo?.toString() === req.user.id;

  if (!isRequester && !isngo && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  
  res.json(request);
};

export const getAllOpenHelpRequests = async (req, res) => {
  const requests = await helpModel.find({ status: 'open', ngo: null });
  if (!requests) {
    return res.status(404).json({ error: 'No open requests found' });
  }
  res.json(requests);
};


export const acceptHelpRequest = async (req, res) => {
  const request = await helpModel.findById(req.params.id);
  
  if (!request || request.status !== 'open' || request.ngo) {
    return res.status(403).json({ error: 'Request not available' });
  }
  
  request.status = 'in-progress';
  request.ngo = req.user.id;
  await request.save();
  
  // Add to ngo's matched requests if they have a profile
  const ngoProfile = await ngoModel.findOne({ user: req.user.id });
  if (ngoProfile) {
    ngoProfile.matchedRequests.push(request._id);
    await ngoProfile.save();
  }
  
  res.json(request);
};
export const getAcceptedHelpRequests = async (req, res) => {
  const requests = await helpModel.find({ 
    ngo: req.user.id 
  });
  
  res.json(requests);
};

export const completeHelpRequest = async (req, res) => {
  const request = await helpModel.findById(req.params.id);
  
  if (!request || request.ngo.toString() !== req.user.id) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  
  request.status = 'completed';
  await request.save();
  
  res.json(request);
};


export const cancelAcceptedHelpRequest = async (req, res) => {
  const request = await helpModel.findById(req.params.id);
  
  if (!request || request.ngo.toString() !== req.user.id) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  
  // Remove from ngo's matched requests
  const ngoProfile = await ngoModel.findOne({ user: req.user.id });
  if (ngoProfile) {
    ngoProfile.matchedRequests = ngoProfile.matchedRequests.filter(
      reqId => reqId.toString() !== request._id.toString()
    );
    await ngoProfile.save();
  }
  
  request.status = 'open';
  request.ngo = null;
  await request.save();
  
  res.json(request);
};


export const getngoProfile = async (req, res) => {
  const profile = await ngoModel.findOne({ user: req.user.id });
  
  if (!profile) {
    return res.status(404).json({ error: 'ngo profile not found' });
  }
  
  res.json(profile);
};

export const updatengoProfile = async (req, res) => {
  const { name, skills, availability, location } = req.body;
  
  let profile = await ngoModel.findOne({ user: req.user.id });
  
  if (!profile) {
    // Create new profile
    profile = new ngoModel({
      user: req.user.id,
      name: name || req.user.name,
      skills: skills || [],
      availability: availability || '',
      location: location || '',
      matchedRequests: []
    });
  } else {
    // Update existing profile
    if (name) profile.name = name;
    if (skills) profile.skills = skills;
    if (availability) profile.availability = availability;
    if (location) profile.location = location;
  }
  
  await profile.save();
  res.json(profile);
};


