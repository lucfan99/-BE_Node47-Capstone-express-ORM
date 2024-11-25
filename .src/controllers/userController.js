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

const savecomment = async (req,res) => {
  try {
    let {nguoi_dung_id, hinh_id ,noi_dung}= req.params;
    let nguoiDung = await prisma.binh_luan.findUnique({
      where: {nguoi_dung_id}
    })
    let hinhAnh = await prisma.binh_luan.findUnique({
      where: {hinh_id}
    })
    if(!nguoiDung){
      return res.status(400).json({message: "not found user"})
    }
    if(!hinhAnh){
      return res.status(400).json({message: "not found images"})
    }
    let data = await prisma.binh_luan.create({
      data: {
        nguoi_dung_id,
        hinh_id,
        ngay_binh_luan,
        noi_dung
      }
    })
    return res.status(201).json({message: "success" , data})
  } catch (error) {
    return res.status(500).json({message: "fail"})
  }
}
export { getUsers, createUser ,savecomment };
