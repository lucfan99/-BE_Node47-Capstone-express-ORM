import express from "express";
import {
  createUser,
  getInfoUser,
  savecomment,
} from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get("/get-info-user/:id", getInfoUser);
userRoutes.post("/create-user", createUser);
userRoutes.post("/save-comment", savecomment);
export default userRoutes;
