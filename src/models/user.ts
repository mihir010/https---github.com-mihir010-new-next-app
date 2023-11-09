import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: [true, "name cannot be empty"],
        unique: [true, "username should be unique"]
    },
    email:{
        type:String,
        required: [true, "email cannot be empty"],
        unique: [true, "email should be unique"]
    },
    password:{
        type:String,
        required: [true, "password cannot be empty"]
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry:Date
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;