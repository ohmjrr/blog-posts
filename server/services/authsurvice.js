import { db } from "../utils/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;

  const collection = db.collection("users");
  await collection.insertOne(user);
};

export const loginUser = async (username, password) => {
  console.log(username, password);

  const user = await db.collection("users").findOne({ username: username });

  if (user == null) {
    return "User not found"
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return "Invalid password";
  }

  const key = "asdasddasdsadsadasdasd";
  const token = jwt.sign({ username: user.username, email: user.email }, key, {
    expiresIn: "90000",
  });

  return token;
};
