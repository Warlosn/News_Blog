"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const articles_schema_1 = require("../articles/articles.schema");
const socket_constants_1 = require("./socket.constants");
let SocketService = class SocketService {
    constructor(articleModel) {
        this.articleModel = articleModel;
    }
    WSDispatcher(payload) {
        switch (payload.type) {
            case socket_constants_1.WSMessageType.ADD:
                return this.WSAddHandler(payload);
            case socket_constants_1.WSMessageType.HANDSHAKE:
                return this.WSHandshakeHandler();
            default:
                return null;
        }
    }
    async WSAddHandler(payload) {
        const [title, subtitle] = payload.message.split('-');
        const article = await this.articleModel.findOne({ title, subtitle });
        const attachment = `/articles/${article._id}`;
        return {
            message: 'New post was created. You can check it by link: ',
            attachment,
        };
    }
    async WSHandshakeHandler() {
        return {
            message: 'Handshake success',
        };
    }
};
SocketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(articles_schema_1.Article.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SocketService);
exports.SocketService = SocketService;
//# sourceMappingURL=socket.service.js.map