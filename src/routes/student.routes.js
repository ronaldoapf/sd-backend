import Router from 'express';

import ensureAuth from '../middlewares/ensureAuth';
import validateResource from '../middlewares/validateResource';
import studentValidation from '../commons/validations/student';
import StudentController from '../controllers/StudentController';
import UserSubjectController from '../controllers/UserSubjectController';

const router = Router();

router.use(ensureAuth);

router.get('/find', StudentController.index);
router.get('/', StudentController.list);
router.post('/', validateResource(studentValidation), StudentController.store);

router.post('/:studentId/subject/:subjectId', UserSubjectController.store);
router.delete('/:studentId/subject/:subjectId', UserSubjectController.delete);

export default router;
