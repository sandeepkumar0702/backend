import express from 'express';
import userController from "../controllers/userController.js";

const router=express.Router();

// router.get('/',(req,res)=>{});
// router.post('/',(req,res)=>{});

router.route('/')
    .get(userController.getUser)
    .post(userController.createUser)



export default router;