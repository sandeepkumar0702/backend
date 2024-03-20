import express from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main(){
    await prisma.user.create({
        data:{
            name:"sandy",
            email:"sandeep1261.be21@chitkara.edu.in",
        }
    })
}
main();