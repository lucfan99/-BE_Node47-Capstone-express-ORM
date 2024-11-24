import express from "express";
import { createUser, getUsers } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get("/get-users", getUsers);
userRoutes.post("/create-user", createUser);
export default userRoutes;
