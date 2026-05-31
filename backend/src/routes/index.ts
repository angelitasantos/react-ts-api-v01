import { Router } from 'express';
import { BACKEND_WORKING } from '../constants/index';

const router = Router();

router.get('/', (req, res) => {
  res.send(BACKEND_WORKING);
});

export default router;