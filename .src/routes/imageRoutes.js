import express from "express";
import {
  getListImages,
  getListImgByName,
} from "../controllers/imageController.js";

const imageRoutes = express.Router();

imageRoutes.get("/get-list-images", getListImages);
imageRoutes.get("/get-list-img-by-name", getListImgByName);

export default imageRoutes;
