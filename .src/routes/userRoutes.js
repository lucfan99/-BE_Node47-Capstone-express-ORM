import express from "express";
<<<<<<< HEAD
import { createUser, getUsers ,savecomment } from "../controllers/userController.js";
import { middlewareToken } from "../config/jwt.js";

const userRoutes = express.Router();

userRoutes.get("/get-users",middlewareToken, getUsers);
userRoutes.post("/create-user",middlewareToken, createUser);
userRoutes.post("/save-comment", middlewareToken, savecomment)
export default userRoutes;
=======
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
>>>>>>> 5291124e5d035c9d5b90a618c2c6686598964c4b
