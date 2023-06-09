"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const articles_schema_1 = require("../articles/articles.schema");
const socket_gateway_1 = require("./socket.gateway");
const socket_service_1 = require("./socket.service");
let SocketModule = class SocketModule {
};
SocketModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: articles_schema_1.Article.name, schema: articles_schema_1.ArticleSchema }]),
        ],
        providers: [socket_gateway_1.SocketGateway, socket_service_1.SocketService],
        exports: [socket_gateway_1.SocketGateway],
    })
], SocketModule);
exports.SocketModule = SocketModule;
//# sourceMappingURL=socket.module.js.map