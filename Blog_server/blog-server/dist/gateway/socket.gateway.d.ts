import { OnModuleInit } from '@nestjs/common';
import { SocketService } from './socket.service';
export declare class SocketGateway implements OnModuleInit {
    private socketService;
    constructor(socketService: SocketService);
    private server;
    private clients;
    onModuleInit(): void;
}
