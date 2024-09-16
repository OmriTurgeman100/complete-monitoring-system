import mongoose from "mongoose";

interface node {
  title: string;
  description: string;
  status: string;
  parent: mongoose.Types.ObjectId | null;
}
// Define the schema without types
const Nodeschema = new mongoose.Schema<node>({
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
  parent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Node",
      default: null,
    },
  ],
});

// * Populate middleware
Nodeschema.pre(/^find/, function (this: any, next) {
  this.populate({
    path: "parent",
  });

  next();
});

const Node = mongoose.model("Node", Nodeschema);

export default Node;
