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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const ws_1 = require("ws");
const socket_constants_1 = require("./socket.constants");
const socket_service_1 = require("./socket.service");
let SocketGateway = class SocketGateway {
    constructor(socketService) {
        this.socketService = socketService;
        this.clients = [];
    }
    onModuleInit() {
        console.log('Websockets gateway init');
        this.server.on('connection', (client) => {
            console.log('Client connected');
            this.clients.push(client);
            client.on('message', async (payload) => {
                const wsClientMessage = JSON.parse(payload.toString());
                const message = await this.socketService.WSDispatcher(wsClientMessage);
                if (message && wsClientMessage.type !== socket_constants_1.WSMessageType.HANDSHAKE) {
                    for (let item of this.clients) {
                        if (item !== client && item.readyState === 1) {
                            item.send(JSON.stringify(message));
                        }
                    }
                }
            });
        });
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", ws_1.WebSocketServer)
], SocketGateway.prototype, "server", void 0);
SocketGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(3026),
    __metadata("design:paramtypes", [socket_service_1.SocketService])
], SocketGateway);
exports.SocketGateway = SocketGateway;
//# sourceMappingURL=socket.gateway.js.map