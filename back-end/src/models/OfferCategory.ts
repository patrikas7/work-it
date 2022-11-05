import mongoose, { Document, Schema } from 'mongoose';

export interface IOfferCategory {
    Category: string;
    FreelanceOffer?: string;
    JobOffer?: string;
}

export interface IOfferCategoryModel extends IOfferCategory, Document {}

const OfferCategorySchema: Schema = new Schema(
    {
        category: { type: Schema.Types.ObjectId, required: true, ref: 'Category' },
        freelanceOffer: { type: Schema.Types.ObjectId, ref: 'FreelanceOffer' },
        jobOffer: { type: Schema.Types.ObjectId, ref: 'JobOffer' }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IOfferCategoryModel>('OfferCategory', OfferCategorySchema);
