import express from "express";
import { createUser, getUsers ,savecomment } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get("/get-users", getUsers);
userRoutes.post("/create-user", createUser);
userRoutes.post("/save-comment", savecomment)
export default userRoutes;