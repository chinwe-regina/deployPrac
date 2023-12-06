import { Request, Response } from "express";
import userModel from "../model/userModel"

export const createUser= async(req:Request, res:Response):Promise<Response>=>{
    try{
        const {UserName, email, password}=req.body;
        const generatSalt= await bcrypt.genSalt(10);
        const hashed =await bcrypt.hashed(password, generatSalt;
            const token=crypto.randonBytes(3).toString
    }catch(error{
    return res.status.(404).json({
    message: "error"
m})
    })
}


// export const createUser =async(req:Request, res:Response)=>{
//     try{

//     const {companyName, email, password}= req.body;

//     const user= await userModel.create({companyName, email, password})
//         return res.status(201).json({
//             message: "created user successfully",
//             data: user
//         })
//     }catch(error:any){
// return res.status(404).json({
//     meassage: "Error in creating user",
//     data: error.message
// })
//     }
// }

// export const viewUser =async(req:Request, res:Response)=>{
//     try{  

//     const user= await userModel.find()
//         return res.status(200).json({
//             message: "found user successfully",
//             data:user
//         })
//     }catch(error){
// return res.status(404).json({
//     meassage: "Error in finding user"
// })
//     }
// }

// export const viewOneUser =async(req:Request, res:Response)=>{
//     try{

//    const {userID} =req.params

//     const user= await userModel.findById(userID)
//         return res.status(200).json({
//             message: "found One user successfully",
//             data:user
//         })
//     }catch(error){
// return res.status(404).json({
//     meassage: "Error in finding user"
// })
//     }
// }
// export const deleteOneUser =async(req:Request, res:Response)=>{
//     try{

//    const {userID} =req.params

//     const user= await userModel.findByIdAndDelete(userID)
//         return res.status(200).json({
//             message: "deleted One user successfully",
//             data:user
//         })
//     }catch(error){
// return res.status(404).json({
//     meassage: "Error in finding user"
// })
//     }
// }