import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    pass: Number,
});

export const UserModel = mongoose.model("user", userSchema);