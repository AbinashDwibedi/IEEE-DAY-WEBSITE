import express from "express"
import cors from "cors"

const app = express();

const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3001"
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true
  }));
  
app.use(express.json());
// app.use(express.static("public"))

app.get("/", (req, res)=>{
    res.send("it's working")
})

import competitionsRoute from "./routes/competitions.router.js"
app.use("/api/competitions" , competitionsRoute);

export {app}