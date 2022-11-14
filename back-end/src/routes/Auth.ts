import express from 'express';
import controller from '../controllers/UserController';
import { Schemas, Validate } from '../middleware/SchemaValidator';

const router = express.Router();

router.route('/register/client').post(Validate(Schemas.client.create), controller.registerClient);

router.route('/register/employer').post(Validate(Schemas.employer.create), controller.registerEmployer);

export = router;
