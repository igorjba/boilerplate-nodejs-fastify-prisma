import { prisma } from '@/lib/prisma';
import { Like, Prisma } from '@prisma/client';
import { LikesRepository } from '../likes-repository';

export class PrismaLikesRepository implements LikesRepository {
    async findByUserIdAndPostId(userId: string, postId: string): Promise<Like | null> {
        const like = await prisma.like.findFirst({
            where: {
                userId,
                postId,
            },
        });

        return like;
    }

    async findByUserIdAndCommentId(userId: string, commentId: string): Promise<Like | null> {
        const like = await prisma.like.findFirst({
            where: {
                userId,
                commentId,
            },
        });

        return like;
    }

    async create(data: Prisma.LikeCreateInput): Promise<Like> {
        const like = await prisma.like.create({
            data,
        });

        return like;
    }

    async delete(likeId: string): Promise<void> {
        await prisma.like.delete({
            where: {
                id: likeId,
            },
        });
    }
}
