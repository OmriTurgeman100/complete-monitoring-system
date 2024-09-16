import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodeRouter from "./routes/nodeRouter";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// localhost/api/nodes
app.use("/api/nodes", nodeRouter);

export default app;
