import mongoose, { Document, Schema } from 'mongoose';
import { Gender } from '../utils/enums';

export interface IResume {
    Name: string;
    Surname: string;
    DateOfBirth: Date;
    Email: string;
    Gender: Gender;
    PhoneNumber: string;
    Description: string;
    Skills?: string;
    WorkExperience?: string;
    Education?: string;
    Languages?: string;
    Certificates?: string;
    Links?: string;
    Client?: string;
}

export interface IResumeModel extends IResume, Document {}

const ResumeSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        surname: { type: String, required: true },
        dateOfBirth: { type: Date, required: true },
        email: { type: String, required: true },
        gender: { type: Gender, required: true },
        phoneNumber: { type: String, required: true },
        description: { type: String, required: true },
        skills: { type: String },
        workExperience: { type: String },
        education: { type: String },
        languages: { type: String },
        certificates: { type: String },
        links: { type: String },
        client: { type: Schema.Types.ObjectId, required: true, ref: 'Client' }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IResumeModel>('Resume', ResumeSchema);
