import { Strategy } from 'passport-jwt';
import { UsersService } from 'src/user/users.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UsersService);
    validate(payload: any): Promise<import("../user/users.schema").User>;
}
export {};
