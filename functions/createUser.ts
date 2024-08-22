import { prisma } from "../libs/prisma";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
    const { name, email } = req.body;
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
            }
        });
        return res.json(user);
    } catch(err) {
        return res.status(400).json(err);
    }

}