import { Prisma, Post } from '@prisma/client'

export interface PostsRepository {
    findById(postId: string): Promise<Post | null>
    findByUserId(userId: string): Promise<Post[]>
    create(data: Prisma.PostCreateInput): Promise<Post>
    update(postId: string, data: Prisma.PostUpdateInput): Promise<Post>
    delete(postId: string): Promise<void>
}
