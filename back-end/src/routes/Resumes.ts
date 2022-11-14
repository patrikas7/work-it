import express from 'express';
import controller from '../controllers/ResumeController';
import { Schemas, Validate, ValidateId } from '../middleware/SchemaValidator';

const router = express.Router();

router.route('/').get(controller.getResumes).post(Validate(Schemas.resume.create), controller.postResume);

router.route('/:id').get(ValidateId, controller.getResume).put(ValidateId, Validate(Schemas.resume.update), controller.putResume).delete(ValidateId, controller.deleteResume);

export = router;
