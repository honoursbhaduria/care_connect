import helpModel from '../models/help.model.js';

export const createRequest = async (req, res) => {
  const { title, description, category, location, time } = req.body;

  const newRequest = new helpModel({
    title,
    description,
    category,
    location,
    time,
    requester: req.user.id
  });

  await newRequest.save();
  res.status(201).json(newRequest);
};

export const getMyRequests = async (req, res) => {
  const requests = await helpModel.find({ requester: req.user.id });
  res.json(requests);
};

export const updateRequest = async (req, res) => {
  const request = await helpModel.findById(req.params.id);
  if (!request || request.requester.toString() !== req.user.id) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  const updated = await helpModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteRequest = async (req, res) => {
  const request = await helpModel.findById(req.params.id);
  if (!request || request.requester.toString() !== req.user.id) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  await request.deleteOne();
  res.json({ message: 'Request deleted' });
};