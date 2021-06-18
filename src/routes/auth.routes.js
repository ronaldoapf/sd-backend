import Router from 'express';

import AuthController from '../controllers/AuthController';

const router = Router();

router.post('/', AuthController.store);

export default router;
