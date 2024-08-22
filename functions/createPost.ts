import { Request, Response } from "express";
import {prisma} from "../libs/prisma"


export const createPost = async (req: Request, res: Response) => {
    const { title, content, authorId } = req.body;
    try {
      const post = await prisma.post.create({
        data: {
          title,
          content,
          authorId,
        },
      });
      return res.json(post);
    } catch (e) {
      return res.status(400).json(e);
    }
  }