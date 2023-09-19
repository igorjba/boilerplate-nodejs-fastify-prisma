import { Prisma, Like } from '@prisma/client'

export interface LikesRepository {
    findByUserIdAndPostId(userId: string, postId: string): Promise<Like | null>
    findByUserIdAndCommentId(userId: string, commentId: string): Promise<Like | null>
    create(data: Prisma.LikeCreateInput): Promise<Like>
    delete(likeId: string): Promise<void>
}
