import { PrismaClient } from "@prisma/client";
import connect from "../../db.js";
const prisma = new PrismaClient();

const getListImages = async (req, res) => {
  let data = await prisma.hinh_anh.findMany();
  return res.status(200).json(data);
};
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
    });

    if (!data) {
      return res.status(404).json({ message: "Image not found" });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: "Get info images failed" });
  }
};



const getComentImages = async (req , res) => {
  try {
    let { hinh_id } = req.params; 
    hinh_id = parseInt(hinh_id, 10);  
  let data = await prisma.binh_luan.findFirst({
    where: {
      hinh_id
    }
  })
  return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({message: "get comment images fail"})
  }
}

const getSaveImages = async (req, res) => {
  try {
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


const addImages = async (req, res) => {
  try {
    let {nguoi_dung_id , ten_hinh , duong_dan , mo_ta } = req.body;
    const nguoiDung = await prisma.nguoi_dung.findUnique({
      where: {
        nguoi_dung_id
      }
    })

    if(!nguoiDung){
    
      return res.status(400).json({message: "can not find user"})
    }
    const newImg = await prisma.hinh_anh.create({
      data: {
        nguoi_dung_id,
        ten_hinh,
        duong_dan,
        mo_ta
      }
    })
    return res.status(201).json({message: "add img success" , newImg})
  } catch (error) {
    return res.status(500).json({message: "add image fail"})
  }

}


export { getListImages ,getInfoImages ,getComentImages ,getSaveImages ,addImages };

