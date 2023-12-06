import { Application, Request, Response } from "express";

export const mainApp = (app: Application)=>{
  try{
    app.get("/", (req:Request, res:Response):Response=>{
      try{
        return res.status(200).json({
          message: "welcome to my server"
        });
      }catch(error){
        return res.status(404).json({
          message:"API Errror"
        })
      }
    })
  }catch(error){
    console.log(error);
    
  }
} 