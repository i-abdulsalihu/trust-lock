import mongoose from "mongoose";

const freelancerSchema = new mongoose.Schema({
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
  pendingProjects: {
    type: Number,
    default: 0
  },
  totalProjects: {
    type: Number,
    default: 0,
  },
  projects: [
    {
      projectName: {
        type: String
      },
      workType: {
        type: String
      },
      cost: {
        type: Number
      },
      state: {
        type: String
      },
      payment: {
        type: String
      }
    }
  ],
  earnings: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

const Freelancer = mongoose.model("Freelancer", freelancerSchema);

export default Freelancer;