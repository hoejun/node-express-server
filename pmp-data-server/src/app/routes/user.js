import { Router } from 'express';
import { getUser, getUserOne } from '../controllers/user.controller.js';

const router = Router();

router.get('/', getUser);
router.get('/:id', getUserOne);

export default router;
