import express from "express";
import {
  login,
  signUp,
  forgotPassword,
  changePassword,
} from "../controllers/authController.js";

import { tryCatch } from "../config/tryCatch.js";

const authRoutes = express.Router();

authRoutes.post("/login", tryCatch(login));
authRoutes.post("/sign-up", signUp);
authRoutes.post("/forgot-password", forgotPassword);
authRoutes.post("/change-password", changePassword);
export default authRoutes;
