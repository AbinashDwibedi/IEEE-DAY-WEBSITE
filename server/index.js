import { configDotenv } from "dotenv";
import {connectDB} from "./src/db/db.js"
import { app } from "./src/app.js";

configDotenv({
    path:"./.env"
});

connectDB().then(()=>{
    app.listen(process.env.PORT , ()=>{
        console.log(`app is listening at url : http://localhost:${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongoDB connection failed in app.js");
})