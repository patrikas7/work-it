import mongoose, { Document, Schema } from 'mongoose';
import { JobOfferType } from '../utils/enums';

export interface IJobOffer {
    Name: string;
    Description: string;
    Requirements: string;
    EmployerOffer: string;
    Salary: string;
    WorkingTime: string;
    Employer: string;
    Period?: string;
    Type: JobOfferType;
}

export interface IJobOfferModel extends IJobOffer, Document {}

const JobOfferSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        requirements: { type: String, required: true },
        employerOffer: { type: String, required: true },
        salary: { type: String, required: true },
        workingTime: { type: String, required: true },
        employer: { type: Schema.Types.ObjectId, required: true, ref: 'Employer' },
        period: { type: String },
        type: { type: String, enum: JobOfferType, required: true }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IJobOfferModel>('JobOffer', JobOfferSchema);
