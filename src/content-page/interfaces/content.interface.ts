import { Document } from 'mongoose';

export interface IContent extends Document {
    readonly title: string;
    readonly content: string;
    readonly createDate: Date;
}
