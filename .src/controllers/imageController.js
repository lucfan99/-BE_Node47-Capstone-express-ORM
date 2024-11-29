import { PrismaClient } from "@prisma/client";
import connect from "../../db.js";
const prisma = new PrismaClient();

const getListImages = async (req, res) => {
  try {
    let data = await prisma.hinh_anh.findMany();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
<<<<<<< HEAD
const getInfoImages = async (req, res) => {
  try {
    const { hinh_id } = req.params;

    const data = await prisma.hinh_anh.findFirst({
      where: {
        hinh_id: parseInt(hinh_id, 10),
      },
      select: {
        nguoi_dung_id: true,
        hinh_id: true,
        ten_hinh: true,
        duong_dan: true,
        mo_ta: true,
        nguoi_dung: { 
          select: {
            email: true,
          },
        },
      },
=======

const getInfoImages = async (req, res) => {
  try {
    let { hinh_id } = req.params;
    hinh_id = parseInt(hinh_id, 10);

    let data = await prisma.hinh_anh.findFirst({
      where: { hinh_id: hinh_id },
>>>>>>> 5291124e5d035c9d5b90a618c2c6686598964c4b
    });

    if (!data) {
      return res.status(404).json({ message: "Image not found" });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Get info images failed" });
  }
};

const getComentImages = async (req, res) => {
  try {
<<<<<<< HEAD
    let { hinh_id } = req.params; 
    hinh_id = parseInt(hinh_id, 10);  
  let data = await prisma.binh_luan.findFirst({
    where: {
      hinh_id
    }
  })
  return res.status(200).json(data)
=======
    let { hinh_id } = req.params;
    hinh_id = parseInt(hinh_id, 10);
    let data = await prisma.binh_luan.findFirst({
      where: {
        hinh_id,
      },
      select: {
        nguoi_dung_id: true,
        ngay_binh_luan: true,
        noi_dung: true,
      },
    });
    return res.status(200).json(data);
>>>>>>> 5291124e5d035c9d5b90a618c2c6686598964c4b
  } catch (error) {
    return res.status(500).json({ message: "get comment images fail" });
  }
};

const getSaveImages = async (req, res) => {
  try {
<<<<<<< HEAD
    const { hinh_id } = req.params;

    // Kiểm tra sự tồn tại của hinh_id trong cơ sở dữ liệu
    const imageExists = await prisma.hinh_anh.findFirst({
      where: {
        hinh_id: parseInt(hinh_id, 10),
      },
      select: {
        hinh_id: true
      },
    });
    if (imageExists) {
      return res.status(200).json({ message: "images has been save"});
    } else {
      return res.status(200).json({ message: "images has not been save"});
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: "Failed to check if image is saved" });
  }
};

=======
    let { hinh_id } = req.params;
    hinh_id = parseInt(hinh_id, 10);
    let data = await prisma.hinh_anh.findUnique({
      where: {
        hinh_id,
      },
    });
    if (data) {
      return res.status(200).json({ message: "save image succes", data });
    } else {
      return res.status(400).json({ message: "not found img ", data });
    }
  } catch (error) {
    return res.status(500).json({ message: "get save images fail" });
  }
};
>>>>>>> 5291124e5d035c9d5b90a618c2c6686598964c4b

const addImages = async (req, res) => {
  try {
    let { nguoi_dung_id, ten_hinh, duong_dan, mo_ta } = req.body;
    const nguoiDung = await prisma.nguoi_dung.findUnique({
      where: {
        nguoi_dung_id,
      },
    });

    if (!nguoiDung) {
      return res.status(400).json({ message: "can not find user" });
    }
    const newImg = await prisma.hinh_anh.create({
      data: {
        nguoi_dung_id,
        ten_hinh,
        duong_dan,
        mo_ta,
      },
    });
    return res.status(201).json({ message: "add img success", newImg });
  } catch (error) {
    return res.status(500).json({ message: "add image fail" });
  }
};

const getListImgByName = async (req, res) => {
  const { name } = req.params;
  try {
    const data = await prisma.hinh_anh.findMany({
      where: {
        ten_hinh: {
          contains: name,
          // mode: "insensitive",// cần cải thiện thêm để tìm kiếm kết quả gần đúng nhất
        },
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const getCreatedImages = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await prisma.hinh_anh.findMany({
      where: {
        nguoi_dung_id: parseInt(id),
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
const getSavedImages = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await prisma.luu_anh.findMany({
      where: { nguoi_dung_id: parseInt(id) },
      include: {
        hinh_anh: true,
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
const deleteImage = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.$transaction([
      prisma.luu_anh.deleteMany({
        where: { hinh_id: parseInt(id) },
      }),

      prisma.hinh_anh.delete({
        where: { hinh_id: parseInt(id) },
      }),
    ]);

    return res.status(200).json({ message: "Delete successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Delete fail", error: error.message });
  }
};
export {
  getListImages,
  getListImgByName,
  getInfoImages,
  getComentImages,
  getSaveImages,
  getCreatedImages,
  getSavedImages,
  deleteImage,
  addImages,
};
