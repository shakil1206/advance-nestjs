import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { FileController } from './controllers/file.controller';
import { MulterModule } from '@nestjs/platform-express';
import { UploadS3Service } from './services/upload.s3.service';


@Module({
    imports: [
        // MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
        MulterModule.register({
            dest: './files'
        })
    ],
    controllers: [FileController],
    providers: [UploadS3Service],
})
export class FileModule { }