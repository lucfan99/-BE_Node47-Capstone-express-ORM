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
  addImages,
} from "../controllers/imageController.js";

const imageRoutes = express.Router();
// get danh sách ảnh
imageRoutes.get("/get-list-images", getListImages);
// lấy danh sách ảnh theo tên
imageRoutes.get("/get-list-img-by-name/:name", getListImgByName);

// get thông tin ảnh và người tạo ảnh bằng id ảnh
imageRoutes.get("/get-info-images/:hinh_id", getInfoImages);

// get thông tin bình luận theo id ảnh
imageRoutes.get("/get-comment-images/:hinh_id", getComentImages);

// get thông tin đã lưu hình chưa theo id
imageRoutes.get("/get-save-images/:hinh_id", getSaveImages);

// post thêm một ảnh của user
imageRoutes.post("/add-image", addImages);

// get danh sách ảnh đã tạo theo user id
imageRoutes.get("/get-created-images/:id", getCreatedImages);
// get danh sách ảnh đã lưu(save) theo userid
imageRoutes.get("/get-saved-images/:id", getSavedImages);
// xóa ảnh đã tạo theo hinh_id
imageRoutes.delete("/delete-created-image/:id", deleteImage);
export default imageRoutes;
