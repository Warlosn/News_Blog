import { Model } from 'mongoose';
import { ArticleDocument } from 'src/articles/articles.schema';
import { WSClientMessage, WSServMessage } from './socket.interfaces';
export declare class SocketService {
    private articleModel;
    constructor(articleModel: Model<ArticleDocument>);
    WSDispatcher(payload: WSClientMessage): Promise<WSServMessage>;
    WSAddHandler(payload: WSClientMessage): Promise<WSServMessage>;
    WSHandshakeHandler(): Promise<WSServMessage>;
}
