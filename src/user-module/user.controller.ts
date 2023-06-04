import { Body, Controller, Get, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { UserDTO } from './dto/user.dto';
import JwtGuard from './jwt.guard';
// import { Response } from 'express';

@Controller('authentication')
export class userController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async register(@Body() registrationData: UserDTO) {
        return this.authService.register(registrationData);
    }


    @HttpCode(200)
    @Post('log-in')
    // @UseGuards(JwtGuard)
    async login(@Body() data:any) {
        const user = data;
        const token = await this.authService.getUserToken(user.email);
        user.password = undefined;
        return { ...user, token };
    }

    @Get('/test')
    // @UseGuards(JwtGuard)
    async createPost() {
        return this.authService.sayHi();
    }


}