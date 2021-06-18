import Router from 'express';

import userValidation from '../commons/validations/user';
import UserController from '../controllers/UserController';
import validateResource from '../middlewares/validateResource';

const router = Router();

router.get('/', UserController.list);
router.post('/', validateResource(userValidation), UserController.store);

export default router;
