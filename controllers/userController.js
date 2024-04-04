import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const getUser=async (req,res)=>{
    const users=await prisma.user.findMany();
    res.send(users);
}
const createUser=async(req,res)=>{
    const {email,name}=req.body;
    await prisma.user.create({
        data:{email,name}
    })
    res.send("User created");
}
export default{getUser,createUser};