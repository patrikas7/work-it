import mongoose, { Document, Schema } from 'mongoose';

export interface IJobOffer {
    Name: string;
    Description: string;
    Requirements: string;
    EmployerOffer: string;
    Salary: string;
    WorkingTime: string;
    Employer: string;
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
        employer: { type: Schema.Types.ObjectId, required: true, ref: 'Employer' }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IJobOfferModel>('JobOffer', JobOfferSchema);
