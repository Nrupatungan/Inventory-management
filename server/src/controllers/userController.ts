import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getUsers = asyncHandler(async(req: Request, res: Response): Promise<void> => {
    try {
        const users = await prisma.users.findMany({});

        res.json(users)
    } catch (error) {
        res.status(500).json({ message: "Error retreiving users" });
    }
})