"use strict";
// use `prisma` in your application to read and write data in your DB
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../src/generated/prisma");
// ../src/generated/prisma
const prisma = new prisma_1.PrismaClient();
// use `prisma` in your application to read and write data in your DB
// this is similar to : 
// import mongoose from 'mongoose';
//  mongoose.connect();
function insertUser(email, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
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
        });
        console.log("User inserted successfully", res);
    });
}
function updateParams(userId_1, _a) {
    return __awaiter(this, arguments, void 0, function* (userId, { firstName, lastName, password }) {
        const res = yield prisma.user.update({
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
        });
        console.log("User updated successfully", res);
    });
}
// updateParams(1, { firstName: "Shiv", lastName: "Prajapati", password: "password33" });
function deleteUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.delete({
            where: {
                id: userId
            },
            select: {
                id: true,
                email: true,
                firstName: true
            }
        });
        console.log("User deleted successfully", res);
    });
}
deleteUser(2);
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findMany({
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true
            }
        });
        console.log("All users", res);
    });
}
getAllUsers();
