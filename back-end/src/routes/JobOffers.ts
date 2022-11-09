import express from 'express';
import controller from '../controllers/JobOffersController';
import { Schemas, Validate, ValidateId } from '../middleware/SchemaValidator';

const router = express.Router();

router.route('/').get(controller.getJobOffers).post(Validate(Schemas.jobOffer.create), controller.postJobOffer);

router.route('/permanentJobs').get(controller.getPermanentJobOffers);

router.route('/temporaryJobs').get(controller.getTemporaryJobOffers);

router.route('/:id').get(ValidateId, controller.getJobOffer).put(ValidateId, Validate(Schemas.jobOffer.update), controller.putJobOffer).delete(ValidateId, controller.deleteJobOffer);

export = router;
