import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    pass: String,
});

export const UserModel = mongoose.model("user", userSchema);