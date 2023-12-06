
import mongoose from "mongoose";

const URL: string = "mongodb://127.0.0.1:270175";



export const mainConnection = async () => {
  try {
    await mongoose.connect(URL);
    console.log("db connected...!!!");
    
  } catch (error) {
    console.log(error);
  }
};



