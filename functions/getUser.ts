import { Request, Response,  NextFunction } from "express";
import { prisma } from "../libs/prisma";

export const getUser = async(req: Request, res: Response, next: NextFunction) => {
 try {
    const id = Number(req.params.id);
    const user = await prisma.user.findUnique({
        where: {
            id,
        },
        include: {
            Posts: true
        }
    });
    return res.json(user);
 } catch(err) {
    next(err);
 }
}