import { BadRequestException, Controller, Get, Post, Req, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { imagefilefilter } from './file-helper';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
// const getStream = require('into-stream');

export const uploadFile = (fileName: string = 'file'): MethodDecorator => (
    target: any,
    propertyKey,
    descriptor: PropertyDescriptor
) => {
    ApiBody({
        schema: {
            type: 'object',
            properties: {
                [fileName]: {
                    type: 'string',
                    format: 'binary'
                }
            }
        }
    }
    )(target, propertyKey, descriptor)
}

@Controller('file')
export class FileController {
    constructor() { }

    @Get()
    public async hello() {
        return "Hello file";
    }

    @Post('/upload')
    @ApiConsumes('multipart/form-data')
    @uploadFile('image')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './files',
        }),
        fileFilter: imagefilefilter
    }))
    uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req) {
        if (!file || req.fileValidationError) {
            throw new BadRequestException('Invalid file provided, [Image files allowed]');
        }

        // const buffer = file.stream;
        // const stream = getStream(file.buffer)
        // const res = {
        //     originalName: file.originalname,
        //     fileName: file.filename,
        // }
        // console.log(file, buffer);
        return file.filename
    }

    @Post('/upload-multiple')
    @ApiConsumes('multipart/form-data')
    @uploadFile('image')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './files',
        }),
        fileFilter: imagefilefilter
    }))
    uploadMultipleFile(@UploadedFiles() files: Array<Express.Multer.File>) {
        // const res = [];

        // files.map((file) => {
        //     const fileres = {
        //         originalName: file.originalname,
        //         fileName: file.filename,
        //     }
        //     res.push(fileres)
        // })
        console.log(files);
        return 
    }


}