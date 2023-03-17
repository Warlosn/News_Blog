import { WSClientMessage, WSServMessage } from './socket.interfaces';
export declare const WSDispatcher: (payload: WSClientMessage) => WSServMessage;
export declare const WSAddHandler: (payload: WSClientMessage) => WSServMessage;
export declare const WSHandshakeHandler: () => WSServMessage;
