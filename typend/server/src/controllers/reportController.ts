import Reports from "../models/ReportModel";
import { RequestHandler } from "express";

// * get
export const get_nodes: RequestHandler = async (req, res, next) => {
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
