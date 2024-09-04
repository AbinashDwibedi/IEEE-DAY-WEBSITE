import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const connnectionInstance  =await mongoose.connect(process.env.MOGODB_URI);
        console.log(`mongoose connection successfull :`, connnectionInstance.connection.host);
    } catch (error) {
        console.log("mongoDB connection failed : ", error);
        process.exit(1);
    }
}
export {connectDB}