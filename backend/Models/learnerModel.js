import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const learnerSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true   
    },
    phone: {
        type: Number
    },
    age: {
        type: Number
    },
    isMentor: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})