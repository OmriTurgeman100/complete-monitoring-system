import Node from "../models/Nodemodel";
import Reports from "../models/Reportmodel";
import { RequestHandler } from "express";

//TODO make some relationships between documents.

// * get
export const get_nodes: RequestHandler = async (req, res, next) => {
  try {
    const data = await Node.find({ parent: [] });

    res.status(200).json({
      nodes: data,
    });
  } catch (error) {
    res.status(400).json({
      data: error,
    });
  }
};

// * hierarchy node.
export const get_specific_node: RequestHandler = async (req, res, next) => {
  try {
    // const specified_noce = await Node.findById(req.params.id, { status: "up" });
    const specified_node = await Node.find({ parent: req.params.id });

    const specified_report = await Reports.find({ parent: req.params.id });

    res.status(200).json({
      data: specified_node,
      specified_report,
    });
  } catch (error) {
    res.status(400).json({
      data: error,
    });
  }
};

// ? post
export const post_nodes: RequestHandler = async (req, res, next) => {
  try {
    const data = await Node.create(req.body);

    res.status(201).json({
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      data: error,
    });
  }
};

// * patch
export const modify_node: RequestHandler = async (req, res, next) => {
  try {
    const modified_node = await Node.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      data: modified_node,
    });
  } catch (error) {
    res.status(400).json({
      data: error,
    });
  }
};

// ! Delete
export const delete_node: RequestHandler = async (req, res, next) => {
  try {
    const data = await Node.findByIdAndDelete(req.params.id);

    res.status(204).json({
      delete_node: data,
      status: "delete was successful",
    });
  } catch (error) {
    res.status(400).json({
      data: error,
    });
  }
};

//TODO attach report to specific node.
