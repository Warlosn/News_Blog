import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    getUserByToken(req: any): any;
    login(req: any): Promise<{
        access_token: string;
    }>;
}
