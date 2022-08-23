const express = require('express');
const { getAllUsers,getAllapi,getOneUser,getUserRegister,createUser,deleteUser,updateUser } = require('../controllers/user.controller');
const router = express.Router();

router.get("/",getAllapi);

router.get("/users",getAllUsers);
router.get("/users/:id",getOneUser);

router.get("/register",getUserRegister);
router.post("/register",createUser);
router.delete("/users/:id",deleteUser);
router.patch("/users/:id",updateUser);




module.exports = router;