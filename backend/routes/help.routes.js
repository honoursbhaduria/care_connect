import express from 'express';
const helpRoutes = express.Router();

// const { createHelp, getHelp, updateHelp, deleteHelp } = require('../controllers/helpController.js');


import { protect, roleCheck } from '../middleware/authMiddleware.js';
// router.post('/', protect, roleCheck(['needful']), createRequest);
// router.get('/me', protect, roleCheck(['needful']), getMyRequests);
// router.put('/:id', protect, roleCheck(['needful']), updateRequest);
// router.delete('/:id', protect, roleCheck(['needful']), deleteRequest);

export default helpRoutes;