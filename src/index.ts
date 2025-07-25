
// use `prisma` in your application to read and write data in your DB


import { get } from 'http';
import { PrismaClient } from '../src/generated/prisma'
// ../src/generated/prisma

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB
// this is similar to : 
// import mongoose from 'mongoose';
//  mongoose.connect();

async function insertUser(email: string, password: string, firstName: string, lastName: string )
{
    const res = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName
        },
        select: {
            id: true,
            password: true
        }
    })
    console.log("User inserted successfully", res)
}

// insertUser("pranav@gmail.com", "password123", "Pranav", "Prajapati")

interface updateParameter{
    firstName: string;
    lastName : string;
    password: string;
}

async function updateParams(userId: number, {
    firstName,
    lastName,
    password
}: updateParameter){
    const res = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            firstName,
            lastName,
            password
        },
        select: {
            id: true,
            firstName: true,
            lastName: true
        }
    })
    console.log("User updated successfully", res)
}

// updateParams(1, { firstName: "Shiv", lastName: "Prajapati", password: "password33" });

async function deleteUser(userId: number){
    const res = await prisma.user.delete({
        where: {
            id : userId
        },
        select: {
            id: true,
            email: true,
            firstName: true
        }
    })
    console.log("User deleted successfully", res)
}

deleteUser(2);

async function getAllUsers(){
    const res = await prisma.user.findMany({
        select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true
        }
    })
    console.log("All users", res)
}
getAllUsers();