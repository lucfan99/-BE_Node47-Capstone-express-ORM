import express from "express";
import {
  createUser,
  getInfoUser,
  savecomment,
  updateInfoUser,
} from "../controllers/userController.js";
// import { tryCatch } from "../config/tryCatch.js";
import { middlewareToken } from "../config/jwt.js";
const userRoutes = express.Router();

userRoutes.get("/get-info-user/:id", middlewareToken, getInfoUser);
userRoutes.post("/create-user", createUser);
userRoutes.post("/save-comment", savecomment);
userRoutes.put("/update-info-user", middlewareToken, updateInfoUser);
export default userRoutes;
