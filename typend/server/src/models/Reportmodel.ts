import mongoose from "mongoose";

type Report = {
  title: string;
  description: string;
  value: number; //TODO make it be or boolean or int for later, currently only int
  type: string;
  parent: mongoose.Types.ObjectId; // Add this field
};

const ReportSchema = new mongoose.Schema<Report>({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  value: {
    type: Number,
  },
  type: {
    type: String,
    default: "report",
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Node",
  },
});

const Reports = mongoose.model("Reports", ReportSchema);

export default Reports;
