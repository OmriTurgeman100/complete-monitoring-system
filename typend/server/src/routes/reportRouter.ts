import express from "express";
import * as reportController from "../controllers/reportController";

const router = express.Router();

router
  .route("/")
  .get(reportController.get_reports)
  .post(reportController.post_reports);

router
  .route("/:id")
  .patch(reportController.relate_report_to_node)

export default router;
