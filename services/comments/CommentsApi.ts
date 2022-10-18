import { MyAxios } from '@/utils/myAxios';
import { AxiosInstance } from 'axios';
import Comment from '@/models/Comment';

class CommentsApi {
    private commentsAxios: AxiosInstance = MyAxios.create();
    private readonly commentsBaseUrl: string = 'comments';

    async fetchAllComments(): Promise<Array<Comment>> {
        const response = await this.commentsAxios.get<Array<Comment>>(this.commentsBaseUrl);
        return response.data.sort(
            (a: Comment, b: Comment) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }

    async createNewComment(newComment: Comment): Promise<Comment> {
        const response = await this.commentsAxios.post<Comment>(this.commentsBaseUrl, newComment);
        return response.data;
    }
}

export default new CommentsApi();