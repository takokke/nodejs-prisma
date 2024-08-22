import { prisma } from '../libs/prisma';
import { NextFunction, Request, Response } from 'express';

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const name = req.body.name;
    try {
        const user = await prisma.user.update({
            where: {
                id,
            },
            data: {
                name,
            }
        })
        
        return res.json(user);
    } catch(err) {
        next(err)
    }
}