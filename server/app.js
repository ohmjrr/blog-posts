import express from "express"
import { client } from "./utils/db.js"
import cors from "cors"
import authRouter from "./routes/authRouter.js"


async function  init() {
    
    await client.connect()
    const app = express()

    const port = 4000
    app.use(cors())
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.use("/auth",authRouter)

    app.listen(port,()=>{
        console.log(`server port ${port} is running`);
    })
}


init()