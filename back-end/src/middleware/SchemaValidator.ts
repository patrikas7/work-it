import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import Logging from '../library/Logging';
import { IJobOffer } from '../models/JobOffer';
import { Gender, JobOfferType } from '../utils/enums';
import { IResume } from '../models/Resume';
import { IFreelanceOffer } from '../models/FreelanceOffer';
import { IClient } from '../models/Client';
import { IEmployer } from '../models/Employer';

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
            EmployerId: Joi.string().required(),
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
    },
    freelanceOffer: {
        create: Joi.object<IFreelanceOffer>({
            Name: Joi.string().required(),
            Description: Joi.string().required(),
            Period: Joi.string().required(),
            Salary: Joi.string().required(),
            IsFreelanceSearch: Joi.boolean().required(),
            IncludeResume: Joi.boolean().required(),
            clientId: Joi.string().required()
        }),
        update: Joi.object<IFreelanceOffer>({
            Name: Joi.string().required(),
            Description: Joi.string().required(),
            Period: Joi.string().required(),
            Salary: Joi.string().required(),
            IsFreelanceSearch: Joi.boolean().required(),
            IncludeResume: Joi.boolean().required()
        })
    },
    client: {
        create: Joi.object<IClient>({
            Name: Joi.string().required(),
            Surname: Joi.string().required(),
            DateOfBirth: Joi.date().required(),
            Gender: Joi.string().valid(Gender.FEMALE, Gender.MALE).required(),
            Email: Joi.string().required(),
            Password: Joi.string().required()
        })
    },
    employer: {
        create: Joi.object<IEmployer>({
            Name: Joi.string().required(),
            Address: Joi.string().required(),
            City: Joi.string().required(),
            Email: Joi.string().required(),
            Password: Joi.string().required(),
            Logo: Joi.string(),
            Description: Joi.string()
        })
    }
};
