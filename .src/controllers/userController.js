import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const getInfoUser = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await prisma.nguoi_dung.findFirst({
      where: {
        nguoi_dung_id: parseInt(id),
      },
    });
    if (!data) {
      return res
        .status(400)
        .json({ message: "User is incorrect or not existing" });
    }
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const createUser = (req, res) => {
  let body = req.body;
  res.send(body);
};

const savecomment = async (req, res) => {
  try {
    let { nguoi_dung_id, hinh_id, noi_dung } = req.body;
    const nguoi_dung = parseInt(nguoi_dung_id, 10);
    const hinh_anh_id = parseInt(hinh_id, 10);
    let nguoiDung = await prisma.nguoi_dung.findUnique({
      where: {
        nguoi_dung_id: nguoi_dung,
      },
    });
    if (!nguoiDung) {
      return res.status(400).json({ message: " can not find user" });
    }
    let hinhAnh = await prisma.hinh_anh.findUnique({
      where: {
        hinh_id: hinh_anh_id,
      },
    });
    if (!hinhAnh) {
      return res.status(400).json({ message: "can not find images" });
    }

    let data = await prisma.binh_luan.create({
      data: {
        nguoi_dung_id: nguoi_dung,
        hinh_id: hinh_anh_id,
        ngay_binh_luan: new Date(),
        noi_dung,
      },
    });
    return res.status(201).json({ message: " saved successfully", data });
  } catch (error) {
    return res.status(500).json({ message: "fail" });
  }
};
const updateInfoUser = async (req, res) => {
  let { email, mat_khau, ho_ten, tuoi } = req.body;
  let checkUser = await prisma.nguoi_dung.findFirst({
    where: { email },
  });
  if (!checkUser) {
    return res.status(400).json({ message: "Email is wrong" });
  }
  await prisma.nguoi_dung.update({
    data: {
      mat_khau,
      ho_ten,
      tuoi: Number(tuoi),
    },
    where: { nguoi_dung_id: checkUser.nguoi_dung_id },
  });
  return res.status(200).json({ message: "Update Info User Successfully" });
};
export { getInfoUser, createUser, savecomment, updateInfoUser };
