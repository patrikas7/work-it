import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';
import User from './User';

const extendSchema = require('mongoose-extend-schema');

export interface IEmployer extends IUser {
    Name: string;
    Address: string;
    City: string;
    Logo?: string;
    Description?: string;
}

export interface IEmployerModel extends IEmployer, Document {}

const EmployerSchema: Schema = extendSchema(
    User,
    {
        name: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        logo: { type: String },
        description: { type: String }
    },
    { versionKey: false }
);

export default mongoose.model<IEmployerModel>('Employer', EmployerSchema);
