import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import Logging from '../library/Logging';
import { IJobOffer } from '../models/JobOffer';
import { Gender, JobOfferType } from '../utils/enums';
import { IResume } from '../models/Resume';

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
    },
    resume: {
        create: Joi.object<IResume>({
            Name: Joi.string().required(),
            Surname: Joi.string().required(),
            DateOfBirth: Joi.date().required(),
            Email: Joi.string().required(),
            Gender: Joi.string().valid(Gender.FEMALE, Gender.MALE).required(),
            PhoneNumber: Joi.string().required(),
            Description: Joi.string().required(),
            Skills: Joi.string(),
            WorkExperience: Joi.string(),
            Education: Joi.string(),
            Languages: Joi.string(),
            Certificates: Joi.string(),
            Links: Joi.string(),
            clientId: Joi.string().required()
        }),
        update: Joi.object<IResume>({
            Name: Joi.string().required(),
            Surname: Joi.string().required(),
            DateOfBirth: Joi.date().required(),
            Email: Joi.string().required(),
            Gender: Joi.string().valid(Gender.FEMALE, Gender.MALE).required(),
            PhoneNumber: Joi.string().required(),
            Description: Joi.string().required(),
            Skills: Joi.string(),
            WorkExperience: Joi.string(),
            Education: Joi.string(),
            Languages: Joi.string(),
            Certificates: Joi.string(),
            Links: Joi.string()
        })
    }
};
