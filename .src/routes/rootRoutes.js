import express from "express";
import userRoutes from "./userRoutes.js";

const rootRoute = express.Router();

rootRoute.use("/user", userRoutes);

export default rootRoute;
