import express from "express";
import {
  getListImages,
  getListImgByName,
  getInfoImages,
  getComentImages,
  getSaveImages,
  getCreatedImages,
  getSavedImages,
  deleteImage,
} from "../controllers/imageController.js";

const imageRoutes = express.Router();

imageRoutes.get("/get-list-images", getListImages);

imageRoutes.get("/get-list-img-by-name/:name", getListImgByName);

// get thông tin ảnh và người tạo ảnh bằng id ảnh
imageRoutes.get("/get-info-images/:id", getInfoImages);

// get thông tin bình luận theo id ảnh
imageRoutes.get("/get-comment-images/:id", getComentImages);

// get thông tin đã lưu hình chưa theo id
imageRoutes.get("/get-save-images/:id", getSaveImages);

// get danh sách ảnh đã tạo theo user id
imageRoutes.get("/get-created-images/:id", getCreatedImages);
// get danh sách ảnh đã lưu(save) theo userid
imageRoutes.get("/get-saved-images/:id", getSavedImages);
// xóa ảnh đã tạo theo hinh_id
imageRoutes.delete("/delete-created-image/:id", deleteImage);
export default imageRoutes;
