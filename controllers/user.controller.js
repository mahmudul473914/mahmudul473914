const User = require('../models/user.model');
const {v4:uuidv4} = require('uuid');

const getAllUsers = async (req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const getOneUser = async (req,res)=>{
    try {
        const user = await User.findOne({id: req.params.id});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error.message);
    }
}


const getUserRegister = (req,res)=>{
    res.send("<h2>Register Here<h2>");
}

const createUser = async (req,res)=>{
    try {
        const newUser = new User({
            id:uuidv4(),
            name:req.body.name,
            age:Number(req.body.age)
    
        })
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const updateUser = async (req,res)=>{
    try {
        const user = await User.findOne({id: req.params.id});
        user.name = req.body.name;
        user.age = Number(req.body.age);
        await user.save();
        res.status(203).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteUser = async (req,res)=>{
    try {
        const user = await User.findOne({id: req.params.id});
        if(user){
            await User.deleteOne({id: req.params.id});
            res.status(200).json({message:"User successfully Deleted"});
        }else{
            res.status(403).json({message:"User Not Found in DB"});
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}



const getAllapi = (req,res)=>{
    res.send("This is all api list get method");
}

module.exports = { getAllUsers , getAllapi , getOneUser, getUserRegister, createUser,updateUser,deleteUser,updateUser }