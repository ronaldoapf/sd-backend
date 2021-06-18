import Router from 'express';

import auth from './auth.routes';
import user from './user.routes';
import student from './student.routes';
import subject from './subject.routes';

const router = Router();

router.use('/auth', auth);

router.use('/users', user);
router.use('/students', student);
router.use('/subjects', subject);

export default router;
