import express from "express";
import { createUser, getUsers ,savecomment } from "../controllers/userController.js";
import { middlewareToken } from "../config/jwt.js";

const userRoutes = express.Router();

userRoutes.get("/get-users",middlewareToken, getUsers);
userRoutes.post("/create-user",middlewareToken, createUser);
userRoutes.post("/save-comment", middlewareToken, savecomment)
export default userRoutes;