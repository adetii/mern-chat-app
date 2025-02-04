import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    dob: {
        type: Date, // Date type for storing birth date
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    profile: {
        type: String,
        default: "",
    },
}, { timestamps: true }); // Timestamps for createdAt & updatedAt

const User = mongoose.model("User", userSchema);

export default User;
