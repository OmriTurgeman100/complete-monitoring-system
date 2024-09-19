import express from "express";
import * as reportController from "../controllers/reportController"

const router = express.Router();

router
  .route("/")
  .post(reportController.post_reports);


export default router;
