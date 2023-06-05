import { Body, Controller, Get, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './entity/photo.entity';

@Controller('photo')
export class photoController {
    constructor(private readonly photoService: PhotoService) { }

    @Get('/')
    async getPhoto() {
        return this.photoService.findAll()
    }
    @Post('/insert')
    async insertPhoto(@Body() insertData:Photo) {
        return this.photoService.insertPhoto(insertData)
    }


    // @HttpCode(200)
    // @Post('log-in')
    // // @UseGuards(JwtGuard)
    // async login(@Body() data:any) {
    //     const user = data;
    //     const token = await this.authService.getUserToken(user.email);
    //     user.password = undefined;
    //     return { ...user, token };
    // }

    // @Get('/test')
    // // @UseGuards(JwtGuard)
    // async createPost() {
    //     return this.authService.sayHi();
    // }


}