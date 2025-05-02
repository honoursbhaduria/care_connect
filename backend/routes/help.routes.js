import express from 'express';
const helpRoutes = express.Router();

// const { createHelp, getHelp, updateHelp, deleteHelp } = require('../controllers/helpController.js');
import { createRequest, getMyRequests, updateRequest, deleteRequest } from '../controllers/help.controller.js';

import { protect, roleCheck } from '../middleware/authMiddleware.js';
helpRoutes.post('/', protect, roleCheck(['needful']), createRequest);
helpRoutes.get('/me', protect, roleCheck(['needful']), getMyRequests);
helpRoutes.put('/:id', protect, roleCheck(['needful']), updateRequest);
helpRoutes.delete('/:id', protect, roleCheck(['needful']), deleteRequest);

export default helpRoutes;