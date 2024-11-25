import express from "express";
import userRoutes from "./userRoutes.js";
import imageRoutes from "./imageRoutes.js";
import authRoutes from "./authRoutes.js";
// import commandRoutes from "./commandRoutes.js";
const rootRoute = express.Router();
// define user
rootRoute.use("/user", userRoutes);

// define image
rootRoute.use("/image", imageRoutes);
// define binh luan
// rootRoute.use("/command", commandRoutes);
//define  luu anh

//define authen
rootRoute.use("/auth", authRoutes);
export default rootRoute;

