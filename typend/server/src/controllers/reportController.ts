import Reports from "../models/Reportmodel";
import { RequestHandler } from "express";

// * get
export const get_reports: RequestHandler = async (req, res, next) => {
  try {
    const data = await Reports.find();

    res.status(200).json({
      nodes: data,
    });
  } catch (error) {
    res.status(400).json({
      data: error,
    });
  }
};

// ? post
export const post_reports: RequestHandler = async (req, res, next) => {
  try {
    const data = await Reports.create(req.body);

    res.status(201).json({
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      data: error,
    });
  }
};

//TODO patch report

export const relate_report_to_node: RequestHandler = async (req, res, next) => {
  try {
    const report = await Reports.findById(req.params.id);

    console.log(report);
  } catch (error) {
    res.status(400).json({
      data: error,
    });
  }
};
