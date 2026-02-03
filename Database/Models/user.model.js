import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: Number,
    isConfirmed: {
        type: Boolean,
        default: false 
    }
}, { timestamps: true });


userSchema.pre("deleteOne", { document: true }, async function () {
    await mongoose.model("Note").deleteMany({ createdBy: this._id });
});

const userModel = mongoose.model("User", userSchema);
export default userModel;