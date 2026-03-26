import app from "./app.js";
import config from "./config/index.js";
import mongoose from "mongoose";

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});

let server;

async function connectDB() {
  try {
    await mongoose.connect(config.mongoUrl);
    console.log("Connected to MongoDB");

    server = app.listen(config.port, () => {
      console.log(
        `Server is running on port ${config.port} in ${config.nodeEnv} mode.}`,
      );
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}



process.on("unhandledRejection", (error) => {
  if (server) {
    server.close(() => {
      console.error("Unhandled Rejection:", error);
      process.exit(1);
    });
  } else {
    console.error("Unhandled Rejection:", error);
    process.exit(1);
  }
});

connectDB();
