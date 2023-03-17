"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WSHandshakeHandler = exports.WSAddHandler = exports.WSDispatcher = void 0;
const socket_constants_1 = require("./socket.constants");
const WSDispatcher = (payload) => {
    switch (payload.type) {
        case socket_constants_1.WSMessageType.ADD:
            return (0, exports.WSAddHandler)(payload);
        case socket_constants_1.WSMessageType.HANDSHAKE:
            return (0, exports.WSHandshakeHandler)();
        default:
            return null;
    }
};
exports.WSDispatcher = WSDispatcher;
const WSAddHandler = (payload) => {
    const [title, subtitle] = payload.message.split('-');
    const attachment = title + subtitle;
    return {
        message: 'New post was created. You can check it by link: ',
        attachment,
    };
};
exports.WSAddHandler = WSAddHandler;
const WSHandshakeHandler = () => {
    return {
        message: 'Handshake success',
    };
};
exports.WSHandshakeHandler = WSHandshakeHandler;
//# sourceMappingURL=socket.utils.js.map