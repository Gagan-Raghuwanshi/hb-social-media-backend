import express from 'express';
import { createUser, getUsers } from '../controllers/userController.js';

const router = express.Router();

router.get('/get-user', getUsers);
router.post('/create-user', createUser);

export default router;
