import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 160
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlenght: 6,
    },
    gender:{
        type: String,
        required: true,
        enum:["male", "female"],
    },
    profilePicture: {
        type: String,
        default: "",
    },
});

const User = mongoose.model('User', userSchema);

export default User;