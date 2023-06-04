import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserService } from "../user.service";
import { UserDTO } from "../dto/user.dto";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class AuthService {
    constructor(
        readonly userService: UserService,
        readonly jwtService: JwtService
    ) { }

    public async register(registrationData: UserDTO) {
        const hashedPassword = await bcrypt.hash(registrationData.password, 15)

        try {
            const createdUser = await this.userService.createUser({
                ...registrationData,
                password: hashedPassword,
            })
            return createdUser.password = undefined;

        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    public async getAuthUser(email: string, password: string) {
        try {
            const user = await this.userService.getByEmail(email);
            const isPasswordMatching = await bcrypt.compare(password, user.password)
            if (!isPasswordMatching) {
                throw new HttpException("Wrong credential!", HttpStatus.UNAUTHORIZED)
            }
            user.password = undefined;
            return user;

        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }


    public async getUserToken(userId: number) {
        const payload: any = { userId };
        return this.jwtService.sign(payload);
    }

    public async sayHi() {
        return `Hi I am logged in and valid user!`;
    }
}