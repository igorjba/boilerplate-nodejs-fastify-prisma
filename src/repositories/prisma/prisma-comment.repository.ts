import { prisma } from '@/lib/prisma';
import { Prisma, Comment } from '@prisma/client';
import { CommentsRepository } from '../comment.repository';

export class PrismaCommentsRepository implements CommentsRepository {
    async findById(commentId: string): Promise<Comment | null> {
        const comment = await prisma.comment.findUnique({
            where: {
                id: commentId,
            },
        });

        return comment;
    }

    async findByPostId(postId: string): Promise<Comment[]> {
        const comments = await prisma.comment.findMany({
            where: {
                postId,
            },
        });

        return comments;
    }

    async create(data: Prisma.CommentCreateInput): Promise<Comment> {
        const comment = await prisma.comment.create({
            data,
        });

        return comment;
    }

    async update(commentId: string, data: Prisma.CommentUpdateInput): Promise<Comment> {
        const comment = await prisma.comment.update({
            where: {
                id: commentId,
            },
            data,
        });

        return comment;
    }

    async delete(commentId: string): Promise<void> {
        await prisma.comment.delete({
            where: {
                id: commentId,
            },
        });
    }

    async listAll(): Promise<Comment[]> {
        const comments = await prisma.comment.findMany();

        return comments;
    }
}
