import mongoose, { Document, Schema } from 'mongoose';
import { IJobOffer } from './JobOffer';
import JobOffer from './JobOffer';

const extendSchema = require('mongoose-extend-schema');

export interface ITemporaryJob extends IJobOffer {
    Period: string;
}

export interface ITemporaryJobModel extends ITemporaryJob, Document {}

const TemporaryJobSchema: Schema = extendSchema(JobOffer, {
    period: { type: String, required: true }
});

export default mongoose.model<ITemporaryJob>('TemporaryJob', TemporaryJobSchema);
