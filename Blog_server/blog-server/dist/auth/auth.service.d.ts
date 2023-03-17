import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/users.service';
export declare class AuthService {
    private usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
