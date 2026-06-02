import { Router } from 'express';
import { BACKEND_WORKING } from '../constants/index';

const router = Router();

router.get('/', (req, res) => {
  res.send(BACKEND_WORKING);
});

router.get('/api/testa_conexao_frontend', (req, res) => {
  res.status(200).json({
    success: true,
    message: BACKEND_WORKING,
  });
});

export default router;