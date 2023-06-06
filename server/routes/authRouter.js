import { Router } from "express"
import { db } from "../utils/db.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

 const authRouter = Router()

    authRouter.post("/register", async (req,res)=>{
        console.log(req.body);
        const user = {
            username : req.body.username,
            password : req.body.password,
            email : req.body.email
        }

        user.password = await bcrypt.hash(user.password,10)

        const collection = db.collection("users")
        await collection.insertOne(user)

        return res.json({
            message : "server has been creat sucessfully"
        })
    })

    authRouter.post("/login", async(req,res)=>{
        console.log(req.body);
        const user = await db.collection("users").findOne({username : req.body.username})
        
        if (user == null) {
            return res.json({
                message: "ไม่มีไอดีนี้อะ"
            })
        }

       const validPassword = await bcrypt.compare(req.body.password,user.password)

        if (!validPassword) {
            return res.json({
                message : "รหัสไม่ถูกต้อง"
            })
        }
        const key = "asdasddasdsadsadasdasd"
        const token = jwt.sign({username : user.username,email : user.email},
            key,
            {expiresIn:"90000"}
            )

        return res.json({
            message: "เข้าสู่ระบบ",
            token:token
        })


        
    })



    export default authRouter