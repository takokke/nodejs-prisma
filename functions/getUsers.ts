import { NextFunction, Request, Response } from 'express';
import { prisma } from '../libs/prisma';

// ユーザー情報を取得したあと、表示させる
export const getUsers = async (req: Request, res: Response) => {
    // Get All Users
    const users = await prisma.user.findMany({
        include: {
            Posts: true
        }
    });
    return res.json(users);
}