import Router from 'express';

import ensureAuth from '../middlewares/ensureAuth';
import subjectValidation from '../commons/validations/subject';
import SubjectController from '../controllers/SubjectController';
import validateResource from '../middlewares/validateResource';

const router = Router();

router.use(ensureAuth);

router.get('/:id', SubjectController.index);
router.get('/', SubjectController.list);
router.post('/', validateResource(subjectValidation), SubjectController.store);

export default router;
