import { Module } from '@nestjs/common';
import { Database2Module } from 'src/Database2/database2.module';
import { photoController } from './photo.controler';
import { PhotoService } from './photo.service';

@Module({
    imports: [Database2Module],
    controllers: [photoController],
    providers: [PhotoService],
})
export class PhotoModule { }