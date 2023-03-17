import { OnModuleInit } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Socket } from 'socket.io';
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, OnModuleInit {
    private server;
    handleMessage(client: Socket, payload: string): void;
    handleDisconnect(client: any): void;
    handleConnection(client: any, ...args: any[]): void;
    afterInit(server: any): void;
    onModuleInit(): void;
}
