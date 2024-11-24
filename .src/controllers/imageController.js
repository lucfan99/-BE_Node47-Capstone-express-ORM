import { PrismaClient } from "@prisma/client";
// import connect from "../../db.js";
const prisma = new PrismaClient();
const getListImages = async (req, res) => {
  let data = await prisma.hinh_anh.findMany();
  return res.status(200).json(data);
};

export { getListImages };
