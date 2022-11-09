import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Resume from '../models/Resume';
import Client from '../models/Client';
import Logging from '../library/Logging';

const getResumes = (req: Request, res: Response) => {
    return Resume.find()
        .then((resume) => res.status(200).json({ resume }))
        .catch((error) => res.status(500).json({ error }));
};

const getResume = (req: Request, res: Response) => {
    const resumeId = req.params.id;

    return Resume.findById(resumeId)
        .then((resume) => (resume ? res.status(200).json({ resume }) : res.status(404).json({ message: `Resume with id ${resumeId} was not found` })))
        .catch((error) => res.status(404).json({ error }));
};

const postResume = async (req: Request, res: Response) => {
    const { name, surname, dateOfBirth, email, gender, phoneNumber, description, skills, workExperience, education, languages, certificates, links, clientId } = req.body;
    const newResume = new Resume({
        _id: new mongoose.Types.ObjectId(),
        name,
        surname,
        dateOfBirth,
        email,
        gender,
        phoneNumber,
        description,
        skills,
        workExperience,
        education,
        languages,
        certificates,
        links,
        clientId
    });

    try {
        const client = await Client.findById(clientId);
        if (!client) return res.status(404).json({ message: `Client with id ${clientId} was not found` });

        const resume = await Resume.find({ clientId: { $eq: clientId } });
        if (resume) return res.status(400).json({ message: 'Client can not have more than one resume' });

        const savedResume = await newResume.save();
        return res.status(201).json({ savedResume });
    } catch (error) {
        Logging.error(error);
        res.status(500).json({ error });
    }
};

const putResume = async (req: Request, res: Response) => {
    const resumeId = req.params.id;

    try {
        const resume = await Resume.findById(resumeId);
        if (!resume) return res.status(404).json({ message: `Resume with id ${resumeId} was not found` });

        resume.set(req.body);
        const updatedResume = resume.save();
        return res.status(201).json({ updatedResume });
    } catch (error) {
        Logging.error(error);
        res.status(500).json({ error });
    }
};

const deleteResume = async (req: Request, res: Response) => {
    const resumeId = req.params.id;

    try {
        const resume = await Resume.findByIdAndDelete(resumeId);
        return resume ? res.status(201).json({ resume, message: 'Deleted' }) : res.status(404).json({ message: `Job offer with id ${resumeId} was not found` });
    } catch (error) {
        Logging.error(error);
        res.status(500).json({ error });
    }
};

export default { getResumes, getResume, postResume, putResume, deleteResume };
