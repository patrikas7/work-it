import express from 'express';
import controller from '../controllers/FreelanceOffersController';
import { Schemas, Validate, ValidateId } from '../middleware/SchemaValidator';

const router = express.Router();

router.route('/').get(controller.getFreelanceOffers).post(Validate(Schemas.freelanceOffer.create), controller.postFreelanceOffer);

router
    .route('/:id')
    .get(ValidateId, controller.getFreelanceOffer)
    .put(ValidateId, Validate(Schemas.freelanceOffer.update), controller.putFreelanceOffer)
    .delete(ValidateId, controller.deleteFreelanceOffer);

export = router;
