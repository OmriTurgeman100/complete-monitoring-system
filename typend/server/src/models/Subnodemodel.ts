import mongoose from "mongoose";

const Nodeschema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "title is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    status: {
      type: String,
      default: "expired",
      enum: ["up", "down", "critical", "expired"],
    },
    subNodes: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "SubNode",
      },
    ],
  });
  
  const Node = mongoose.model("Node", Nodeschema);
  
  export default Node;