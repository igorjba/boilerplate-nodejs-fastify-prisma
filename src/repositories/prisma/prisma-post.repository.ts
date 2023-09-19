import { prisma } from '@/lib/prisma';
import { Prisma, Post } from '@prisma/client';
import { PostsRepository } from '../post-repository';

export class PrismaPostsRepository implements PostsRepository {
    async findById(postId: string): Promise<Post | null> {
        const post = await prisma.post.findUnique({
            where: {
                id: postId,
            },
        });

        return post;
    }

    async findByUserId(userId: string): Promise<Post[]> {
        const posts = await prisma.post.findMany({
            where: {
                userId,
            },
        });

        return posts;
    }

    async create(data: Prisma.PostCreateInput): Promise<Post> {
        const post = await prisma.post.create({
            data,
        });

        return post;
    }

    async update(postId: string, data: Prisma.PostUpdateInput): Promise<Post> {
        const post = await prisma.post.update({
            where: {
                id: postId,
            },
            data,
        });

        return post;
    }

    async delete(postId: string): Promise<void> {
        await prisma.post.delete({
            where: {
                id: postId,
            },
        });
    }

    async listAll(): Promise<Post[]> {
        const posts = await prisma.post.findMany();

        return posts;
    }
}
