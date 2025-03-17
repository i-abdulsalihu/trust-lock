import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  freelancer: {
    type: String,
  },
  client: {
    type: String,
    required: true
  },
  validator: {
    type: String
  },
  deadline: {
    type: String,
    required: true
  },
  usdcAmount: {
    type: String,
    required: true
  },
  network: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  skills: {
    type: [String],
  },
  workType: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["Submitted", "Paid", "Open", "In Progress", "Completed", "Disputed", "Cancelled", "Revision Requested"],
    default: "Open"
  }
}, { timestamps: true });

const Task = mongoose.model("Task", taskSchema);

export default Task;