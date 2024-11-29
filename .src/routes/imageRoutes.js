import express from "express";
<<<<<<< HEAD
import { getListImages ,getInfoImages ,getComentImages ,getSaveImages ,addImages } from "../controllers/imageController.js";
import { middlewareToken } from "../config/jwt.js";
=======

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
>>>>>>> 5291124e5d035c9d5b90a618c2c6686598964c4b

const imageRoutes = express.Router();

imageRoutes.get("/get-list-images", middlewareToken,getListImages);

imageRoutes.get("/get-list-img-by-name/:name", getListImgByName);

// get thông tin ảnh và người tạo ảnh bằng id ảnh
<<<<<<< HEAD
imageRoutes.get("/get-info-images/:hinh_id" ,middlewareToken, getInfoImages);

// get thông tin bình luận theo id ảnh
imageRoutes.get("/get-comment-images/:hinh_id",middlewareToken, getComentImages);

// get thông tin đã lưu hình chưa theo id
imageRoutes.get("/get-save-images/:hinh_id",middlewareToken, getSaveImages)


// post thêm một ảnh của user
imageRoutes.post("/add-imanges" ,middlewareToken, addImages)

=======
imageRoutes.get("/get-info-images/:id", getInfoImages);

// get thông tin bình luận theo id ảnh
imageRoutes.get("/get-comment-images/:id", getComentImages);

// get thông tin đã lưu hình chưa theo id
imageRoutes.get("/get-save-images/:id", getSaveImages);

// post thêm một ảnh của user
imageRoutes.post("/add-imanges", addImages);
>>>>>>> 5291124e5d035c9d5b90a618c2c6686598964c4b

// get danh sách ảnh đã tạo theo user id
imageRoutes.get("/get-created-images/:id", getCreatedImages);
// get danh sách ảnh đã lưu(save) theo userid
imageRoutes.get("/get-saved-images/:id", getSavedImages);
// xóa ảnh đã tạo theo hinh_id
imageRoutes.delete("/delete-created-image/:id", deleteImage);
export default imageRoutes;
