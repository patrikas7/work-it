import mongoose, { Document, Schema } from 'mongoose';

export interface IFreelanceOffer {
    Name: string;
    Description: string;
    Period: string;
    Salary: string;
    IsFreelanceSearch: boolean;
    IncludeResume: boolean;
    clientId: string;
}

export interface IFreelanceOfferModel extends IFreelanceOffer, Document {}

const FreelanceOfferSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        period: { type: String, required: true },
        salary: { type: String, required: true },
        isFreelanceSearch: { type: Boolean, required: true },
        includeResume: { type: Boolean, required: true },
        clientId: { type: Schema.Types.ObjectId, required: true, ref: 'Client' }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IFreelanceOfferModel>('FreelanceOffer', FreelanceOfferSchema);
