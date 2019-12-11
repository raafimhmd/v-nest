import * as mongoose from 'mongoose';

export const ContentSchemas = new mongoose.Schema({
    id: String,
    title: String,
    content: String,
    createDate: {
        type: Date,
        default: Date.now,
    },
});
