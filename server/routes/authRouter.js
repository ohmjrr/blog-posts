import { Router } from "express";
import { register, login } from "../controllers/authControllers.js";
import validateRegister from "../middlewares/registerMiddleware.js";

const authRouter = Router();

authRouter.post("/register",validateRegister, register);

authRouter.post("/login", login);

export default authRouter;
