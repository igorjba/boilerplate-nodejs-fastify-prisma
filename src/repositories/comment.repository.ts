import { Prisma, Comment } from '@prisma/client'

export interface CommentsRepository {
    findById(commentId: string): Promise<Comment | null>
    findByPostId(postId: string): Promise<Comment[]>
    create(data: Prisma.CommentCreateInput): Promise<Comment>
    update(commentId: string, data: Prisma.CommentUpdateInput): Promise<Comment>
    delete(commentId: string): Promise<void>
}
