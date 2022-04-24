import { Comment } from './comment';

export interface Article {
    titre: string,
    contenu: string,
    comments?: Array<Comment>,
    id_article?: number,
    id: number,
}