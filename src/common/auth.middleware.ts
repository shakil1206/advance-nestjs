import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {

    constructor(){}

    public async use(req: Request, res: Response, next: NextFunction) {

        const { authorization } = req.headers;
        if (!authorization) {
            throw new HttpException({
                message: "Missing Auth Header"
            }, HttpStatus.BAD_REQUEST)
        }


        console.log('Request...');
        next();
    }
}
