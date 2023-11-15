import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a firstname'
    },
    lastName: {
        type: String,
        required: 'Enter a lastname'
    },
    email: {
        type: String,
    },
    company: {
        type: String,
    },
    phone: {
        type: Number,
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});