import mongoose, { Document, Schema } from 'mongoose';
import { IJobOffer } from './JobOffer';
import JobOffer from './JobOffer';

const extendSchema = require('mongoose-extend-schema');

export interface IPermanentJobModel extends IJobOffer, Document {}

const PermanentJobSchema: Schema = extendSchema(JobOffer);

export default mongoose.model<IPermanentJobModel>('PermanentJob', PermanentJobSchema);
