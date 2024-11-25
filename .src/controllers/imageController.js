import { PrismaClient } from "@prisma/client";
// import connect from "../../db.js";
const prisma = new PrismaClient();
const getListImages = async (req, res) => {
  let data = await prisma.hinh_anh.findMany();
  return res.status(200).json(data);
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
export { getListImages, getListImgByName };
