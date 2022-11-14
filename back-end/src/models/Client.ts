import mongoose, { Document, Schema } from 'mongoose';
import { Gender } from '../utils/enums';
import bcrypt from 'bcrypt';

export interface IClient {
    Name: string;
    Surname: string;
    DateOfBirth: Date;
    Gender: Gender;
    Email: string;
    Password: string;
}

export interface IClientModel extends IClient, Document {}

const ClientSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        surname: { type: String, required: true },
        dateOfBirth: { type: Date, required: true },
        gender: { type: String, enum: Gender, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true }
    },
    { versionKey: false }
);

const SALT_ROUNDS = 8;

ClientSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
    }
    next();
});

export default mongoose.model<IClientModel>('Client', ClientSchema);
