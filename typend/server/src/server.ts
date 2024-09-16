import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config({ path: "./src/.env" });

const mongo_url: string = process.env.DATABASE_LOCAL!;

const database_pool = async (): Promise<void> => {
  try {
    await mongoose.connect(mongo_url);
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

database_pool();

const port: string = process.env.PORT!;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
