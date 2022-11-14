import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Logging from '../library/Logging';
import Client from '../models/Client';
import Employer from '../models/Employer';

const loginClient = async (req: Request, res: Response) => {};

const registerClient = async (req: Request, res: Response) => {
    const { name, surname, dateOfBirth, email, gender, password } = req.body;
    const newClient = new Client({
        _id: new mongoose.Types.ObjectId(),
        name,
        surname,
        dateOfBirth,
        email,
        gender,
        password
    });

    try {
        const client = await Client.findOne({ email: { $eq: email } });
        if (client) return res.status(400).json({ message: 'Bad request' });

        const savedClient = await newClient.save();
        return res.status(201).json({ savedClient });
    } catch (error) {
        Logging.error(error);
        res.status(500).json({ error });
    }
};

const registerEmployer = async (req: Request, res: Response) => {
    const { name, address, city, logo, description, email, password } = req.body;
    const newEmployer = new Employer({
        _id: new mongoose.Types.ObjectId(),
        name,
        address,
        city,
        email,
        logo,
        description,
        password
    });

    try {
        const employer = await Employer.findOne({ email: { $eq: email } });
        if (employer) return res.status(400).json({ message: 'Bad request' });

        const savedEmployer = await newEmployer.save();
        return res.status(201).json({ savedEmployer });
    } catch (error) {
        Logging.error(error);
        res.status(500).json({ error });
    }
};

export default { registerClient, registerEmployer };
