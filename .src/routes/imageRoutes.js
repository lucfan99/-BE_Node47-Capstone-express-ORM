import express from "express";
import { getListImages } from "../controllers/imageController.js";

const imageRoutes = express.Router();

imageRoutes.get("/get-list-images", getListImages);

export default imageRoutes;
