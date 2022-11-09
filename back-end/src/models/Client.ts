import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';
import User from './User';
import { Gender } from '../utils/enums';

const extendSchema = require('mongoose-extend-schema');

export interface IClient extends IUser {
    Name: string;
    Surname: string;
    DateOfBirth: Date;
    Gender: Gender;
}

export interface IClientModel extends IClient, Document {}

const ClientSchema: Schema = extendSchema(
    User,
    {
        name: { type: String, required: true },
        surname: { type: String, required: true },
        dateOfBirth: { type: Date, required: true },
        Gender: { type: String, enum: Gender, required: true }
    },
    { versionKey: false }
);

export default mongoose.model<IClientModel>('Client', ClientSchema);
