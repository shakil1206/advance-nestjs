import { Module } from '@nestjs/common';
import { FileController } from './controllers/file.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
    imports: [
        // MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
        MulterModule.register({
            dest: './files'
        })
    ],
    controllers: [FileController],
    providers: [],
})
export class FileModule { }