import { prisma } from "../libs/prisma";
import { NextFunction, Request, Response } from "express";

export const deleteUser = async(req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    try {
        const user = await prisma.user.delete({
            where: {
                id,
            }
        })

        return res.json(user)
    } catch (err) {
        next(err);
    }
}