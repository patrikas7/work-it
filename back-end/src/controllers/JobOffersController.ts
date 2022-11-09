import { Request, Response } from 'express';
import mongoose from 'mongoose';
import JobOffer from '../models/JobOffer';
import Employer from '../models/Employer';
import { JobOfferType } from '../utils/enums';

const getJobOffers = (req: Request, res: Response) => {
    return JobOffer.find()
        .then((jobOffers) => res.status(200).json({ jobOffers }))
        .catch((error) => res.status(500).json({ error }));
};

const getPermanentJobOffers = (req: Request, res: Response) => {
    return JobOffer.find({ type: { $eq: JobOfferType.PERMANENT } })
        .then((jobOffers) => res.status(200).json({ jobOffers }))
        .catch((error) => res.status(500).json({ error }));
};

const getTemporaryJobOffers = (req: Request, res: Response) => {
    return JobOffer.find({ type: { $eq: JobOfferType.TEMPORARY } })
        .then((jobOffers) => res.status(200).json({ jobOffers }))
        .catch((error) => res.status(500).json({ error }));
};

const getJobOffer = (req: Request, res: Response) => {
    const jobOfferId = req.params.id;

    return JobOffer.findById(jobOfferId)
        .then((jobOffer) => (jobOffer ? res.status(200).json({ jobOffer }) : res.status(404).json({ message: `Job offer with id ${jobOfferId} was not found` })))
        .catch((error) => res.status(404).json({ error }));
};

const postJobOffer = (req: Request, res: Response) => {
    const { name, description, requirements, employerOffer, salary, workingTime, employer, period, type } = req.body;
    const newJobOffer = new JobOffer({
        _id: new mongoose.Types.ObjectId(),
        name,
        description,
        requirements,
        employerOffer,
        salary,
        workingTime,
        employer,
        period,
        type
    });

    return Employer.findById(employer)
        .then((employer) => {
            if (!employer) return res.status(404).json({ message: `Employer with id ${employer} was not found` });
            return newJobOffer
                .save()
                .then((jobOffer) => res.status(201).json({ jobOffer }))
                .catch((error) => res.status(500).json({ error }));
        })
        .catch((error) => res.status(400).json({ error }));
};

const putJobOffer = (req: Request, res: Response) => {
    const jobOfferId = req.params.id;

    return JobOffer.findById(jobOfferId)
        .then((jobOffer) => {
            if (!jobOffer) return res.status(404).json({ message: `Job offer with id ${jobOfferId} was not found` });

            jobOffer.set(req.body);
            return jobOffer
                .save()
                .then((jobOffer) => res.status(201).json({ jobOffer }))
                .catch((error) => res.status(500).json({ error }));
        })
        .catch((error) => res.status(500).json({ error }));
};

const deleteJobOffer = (req: Request, res: Response) => {
    const jobOfferId = req.params.id;

    return JobOffer.findByIdAndDelete(jobOfferId)
        .then((jobOffer) => (jobOffer ? res.status(201).json({ jobOffer, message: 'Deleted' }) : res.status(404).json({ message: `Job offer with id ${jobOfferId} was not found` })))
        .catch((error) => res.status(500).json({ error }));
};

export default { getJobOffers, getPermanentJobOffers, getTemporaryJobOffers, getJobOffer, postJobOffer, putJobOffer, deleteJobOffer };
