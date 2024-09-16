import express from "express";
import * as nodeController from "../controllers/nodeController"

const router = express.Router();

router
  .route("/")
  .get(nodeController.get_nodes)
  .post(nodeController.post_nodes);

router
  .route("/:id")
  .get(nodeController.get_specific_node)
  .patch(nodeController.modify_node)
  .delete(nodeController.delete_node);

export default router;
