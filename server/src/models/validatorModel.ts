import mongoose from "mongoose";

const validatorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  totalProjects: {
    type: Number,
    default: 0
  },
  earnings: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const Validator = mongoose.model("Validator", validatorSchema);

export default Validator;
