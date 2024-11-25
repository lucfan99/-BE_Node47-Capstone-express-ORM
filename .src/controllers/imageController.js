import { PrismaClient } from "@prisma/client";
// import connect from "../../db.js";
const prisma = new PrismaClient();

const getListImages = async (req, res) => {
  let data = await prisma.hinh_anh.findMany();
  return res.status(200).json(data);
};

const getInfoImages = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await prisma.hinh_anh.findMany({
      where: { nguoi_dung_id: id },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "get info images fail" });
  }
};

const getComentImages = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await prisma.binh_luan.findMany({
      where: {
        hinh_id: id,
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "get comment images fail" });
  }
};

const getSaveImages = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await prisma.hinh_anh.findUnique({
      where: {
        hinh_id: id,
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

const getListImgByName = async (req, res) => {
  const { name } = req.params;
  try {
    const data = await prisma.hinh_anh.findMany({
      where: {
        ten_hinh: {
          contains: name,
          mode: "insensitive",
        },
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
export {
  getListImages,
  getListImgByName,
  getInfoImages,
  getComentImages,
  getSaveImages,
};
