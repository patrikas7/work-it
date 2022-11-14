import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IEmployer {
    Name: string;
    Address: string;
    City: string;
    Logo?: string;
    Description?: string;
    Email: string;
    Password: string;
}

export interface IEmployerModel extends IEmployer, Document {}

const EmployerSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        logo: { type: String },
        description: { type: String },
        email: { type: String, required: true },
        password: { type: String, required: true }
    },
    { versionKey: false }
);

const SALT_ROUNDS = 8;

EmployerSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
    }
    next();
});

export default mongoose.model<IEmployerModel>('Employer', EmployerSchema);
