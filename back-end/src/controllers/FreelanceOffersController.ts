import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Logging from '../library/Logging';
import Client from '../models/Client';
import FreelanceOffer from '../models/FreelanceOffer';

const getFreelanceOffers = async (req: Request, res: Response) => {
    try {
        const freelanceOffers = await FreelanceOffer.find();
        res.status(200).json({ freelanceOffers });
    } catch (error) {
        Logging.error(error);
        res.status(500).json({ error });
    }
};

const getFreelanceOffer = async (req: Request, res: Response) => {
    const freelanceOfferId = req.params.id;

    try {
        const freelanceOffer = await FreelanceOffer.findById(freelanceOfferId);
        return freelanceOffer ? res.status(200).json({ freelanceOffer }) : res.status(404).json({ message: `Freelance offer with id ${freelanceOffer} was not found` });
    } catch (error) {
        Logging.error(error);
        res.status(500).json({ error });
    }
};

const postFreelanceOffer = async (req: Request, res: Response) => {
    const { name, description, period, salary, isFreelanceSearch, includeResume, clientId } = req.body;
    const newFreelanceOffer = new FreelanceOffer({
        _id: new mongoose.Types.ObjectId(),
        name,
        description,
        period,
        salary,
        isFreelanceSearch,
        includeResume,
        clientId
    });

    try {
        const client = await Client.findById(clientId);
        if (!client) return res.status(404).json({ message: `Client with id ${clientId} was not found` });

        const saveFreelanceOffer = await newFreelanceOffer.save();
        return res.status(201).json({ saveFreelanceOffer });
    } catch (error) {
        Logging.error(error);
        res.status(500).json({ error });
    }
};

const putFreelanceOffer = async (req: Request, res: Response) => {
    const freelanceOfferId = req.params.id;

    try {
        const freelanceOffer = await FreelanceOffer.findById(freelanceOfferId);
        if (!freelanceOffer) return res.status(404).json({ message: `Freelance offer with id ${freelanceOffer} was not found` });

        freelanceOffer.set(req.body);
        const updatedFreelanceOffer = await freelanceOffer.save();

        return res.status(201).json({ updatedFreelanceOffer });
    } catch (error) {
        Logging.error(error);
        res.status(500).json({ error });
    }
};

const deleteFreelanceOffer = async (req: Request, res: Response) => {
    const freelanceOfferId = req.params.id;

    try {
        const freelanceOffer = await FreelanceOffer.findByIdAndDelete(freelanceOfferId);

        return freelanceOffer ? res.status(201).json({ freelanceOffer, message: 'Deleted' }) : res.status(404).json({ message: `Freelance offer with id ${freelanceOffer} was not found` });
    } catch (error) {
        Logging.error(error);
        res.status(500).json({ error });
    }
};

export default { getFreelanceOffers, getFreelanceOffer, postFreelanceOffer, putFreelanceOffer, deleteFreelanceOffer };
