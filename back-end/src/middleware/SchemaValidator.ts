import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import Logging from '../library/Logging';
import JobOffer, { IJobOffer } from '../models/JobOffer';
import { JobOfferType } from '../utils/enums';

export const Validate = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);

            next();
        } catch (error) {
            Logging.error(error);
            return res.status(422).json({ error });
        }
    };
};

export const ValidateId = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ message: 'Unsupported id type' });
    }

    next();
};

export const Schemas = {
    jobOffer: {
        create: Joi.object<IJobOffer>({
            Name: Joi.string().required(),
            Description: Joi.string().required(),
            Requirements: Joi.string().required(),
            EmployerOffer: Joi.string().required(),
            Salary: Joi.string().required(),
            WorkingTime: Joi.string().required(),
            Employer: Joi.string().required(),
            Period: Joi.string(),
            Type: Joi.string().valid(JobOfferType.PERMANENT, JobOfferType.TEMPORARY).required()
        }),
        update: Joi.object<IJobOffer>({
            Name: Joi.string().required(),
            Description: Joi.string().required(),
            Requirements: Joi.string().required(),
            EmployerOffer: Joi.string().required(),
            Salary: Joi.string().required(),
            WorkingTime: Joi.string().required(),
            Period: Joi.string(),
            Type: Joi.string().valid(JobOfferType.PERMANENT, JobOfferType.TEMPORARY).required()
        })
    }
};
