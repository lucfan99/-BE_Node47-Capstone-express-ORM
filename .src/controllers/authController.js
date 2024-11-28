import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { createToken } from "../config/jwt.js";
import transporter from "../config/transporter.js";
import crypto from "crypto";

const prisma = new PrismaClient();

const login = async (req, res) => {
  const { email, mat_khau } = req.body;
  const checkUser = await prisma.nguoi_dung.findFirst({
    where: { email },
  });
  const checkPass = bcrypt.compareSync(mat_khau, checkUser.mat_khau);
  if (!checkUser) {
    return res.status(400).json({ message: "Your Email is wrong" });
  }
  if (!checkPass) {
    return res.status(400).json({ message: "Your Password is wrong" });
  }
  let payload = { userId: checkUser.nguoi_dung_id };
  let accessToken = createToken(payload);
  return res
    .status(200)
    .json({ message: "Login successfully", token: accessToken });
};

const signUp = async (req, res) => {
  const { email, mat_khau, ho_ten, tuoi } = req.body;
  let checkUser = await prisma.nguoi_dung.findFirst({
    where: { email },
  });
  if (checkUser)
    return res.status(400).json({ message: "Email already exists" });
  const hashPass = bcrypt.hashSync(mat_khau, 10);
  const tuoiInt = parseInt(tuoi, 10);
  await prisma.nguoi_dung.create({
    data: {
      email,
      mat_khau: hashPass,
      ho_ten,
      tuoi: tuoiInt,
    },
  });
  const mailOption = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Welcome ${ho_ten} come to Our CapstoneImage`,
    html: `<h1>
        Let post your image to sharing your life with us 
    </h1>`,
  };

  return transporter.sendMail(mailOption, (err, infor) => {
    if (err) return res.status(500).json({ message: "Send mail failed" });
    return res.status(200).json({ message: "Sign Up Successfully" });
  });
};

const forgotPassword = async (req, res) => {
  try {
    let { email } = req.body;
    let checkUser = await prisma.nguoi_dung.findFirst({
      where: { email },
    });
    if (!checkUser)
      return res.status(400).json({ message: "Email doesn't exists" });
    let randomCode = crypto.randomBytes(6).toString("hex");

    await prisma.nguoi_dung.update({
      where: { nguoi_dung_id: checkUser.nguoi_dung_id },
      data: { code: randomCode },
    });
    const mailOption = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Code to verify your account `,
      html: `<h1>
          ${randomCode} 
      </h1>`,
    };
    return transporter.sendMail(mailOption, (err, infor) => {
      if (err) return res.status(500).json({ message: "Send mail failed" });
      return res.status(200).json({ message: "Send verify sucessfully" });
    });
  } catch (error) {
    console.log(error);
  }
};
const changePassword = async (req, res) => {
  try {
    let { email, newPass, code } = req.body;
    if (!email || !code || !newPass) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    let checkEmail = await prisma.nguoi_dung.findUnique({
      where: { email },
    });
    if (!checkEmail) {
      return res.status(400).json({ message: "Invalid email" });
    }
    const validCode = await prisma.code.findFirst({
      where: {
        code,
      },
    });
    if (!validCode) {
      return res.status(400).json({ message: "Invalid or expired code" });
    }
    const hashedPassword = bcrypt.hashSync(newPass, 10);
    await prisma.nguoi_dung.update({
      where: { email },
      data: {
        mat_khau: hashedPassword,
      },
    });
    await prisma.code.delete({
      where: { id: validCode.id },
    });
    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error changing password" });
  }
};
export { login, signUp, forgotPassword, changePassword };
