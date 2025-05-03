
import express from 'express';
const ngoRoutes = express.Router();
import { 
    getAllOpenHelpRequests, 
    acceptHelpRequest, 
    getAcceptedHelpRequests, 
    completeHelpRequest, 
    cancelAcceptedHelpRequest, 
    getngoProfile,
    updatengoProfile
  } from '../controllers/help.controller.js';
import { protect, roleCheck } from '../middleware/authMiddleware.js';

ngoRoutes.get('/help/open',  getAllOpenHelpRequests);

ngoRoutes.put('/help/accept/:id', protect, roleCheck(['ngo']), acceptHelpRequest);

ngoRoutes.get('/help/accepted', getAcceptedHelpRequests);
ngoRoutes.put('/help/complete/:id', protect, roleCheck(['ngo']), completeHelpRequest);
ngoRoutes.put('/help/cancel/:id', protect, roleCheck(['ngo']), cancelAcceptedHelpRequest);
ngoRoutes.get('/profile', protect, roleCheck(['ngo']), getngoProfile);

export default ngoRoutes;