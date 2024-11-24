import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const getUsers = async (req, res) => {
  let data = await prisma.nguoi_dung.findMany();
  return res.status(200).json({ data });
};

const createUser = (req, res) => {
  let body = req.body;
  res.send(body);
};
export { getUsers, createUser };
