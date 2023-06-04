import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/user-module/services/auth.service';
import { User } from 'src/user-module/interface/user.interface';
import { ExtractJwt } from 'passport-jwt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'asdfkasdfl;asdkfjdf'
        });
    }

    async validate(email: string, password: string): Promise<User> {

        // const user = await this.authService.getAuthUser(username, password);
        // if (!user) {
        //     throw new UnauthorizedException();
        // }
        // return user;
        return await this.authService.getAuthUser(email, password);
    }
}