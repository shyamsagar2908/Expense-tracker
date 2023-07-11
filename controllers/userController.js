const userModel=require('../models/userModel');

//login callback
const loginController = async (req,res) => {
    try {
        const {email , password }=req.body;
        // userMOdel mae email aur password hai isliye key value pair ek hi bar likha hai 
        const user =await userModel.findOne({email,password});
        //agar user nahi milta hai toh ek error response send kar denge
        if(!user){
            return res.status(404).send("user not found");
        } 
        res.status(200).json({
            success:true,
            user,
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            error,
        });
    }
};

//register Callback
const registerController = async (req,res) => {
    try {
     const newUser= new userModel(req.body);
     await newUser.save();
     res.status(201).json({
         success:true,
         newUser,
     }) ;       
    } catch (error) {
        res.status(400).json({
            success:false,
            error,
        });
    }
};


module.exports={loginController,registerController};