import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
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
    unique: true,
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
  tasks: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "task",
    },
  ],
}, { timestamps: true });

const Client = mongoose.model("Client", clientSchema);

export default Client;