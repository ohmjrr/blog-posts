import { registerUser, loginUser } from "../services/authsurvice.js";

export const register = async (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  };

  await registerUser(user);

  res.status(201).json({
    message: "User created successfully",
  });
};

export const login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const token = await loginUser(username, password);

  if (token === "User not found") {
    return res.json({
      message: "User not found",
    });
  } else if (token === "Invalid password") {
    return res.json({
      message: "Invalid password",
    });
  }

  res.json({
    message: "เข้าสู่ระบบ",
    token: token,
  });
};
