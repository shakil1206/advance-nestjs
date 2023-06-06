import { Module } from '@nestjs/common';
import { photoController } from './photo.controler';
import { PhotoService } from './photo.service';

@Module({
    imports: [],
    controllers: [photoController],
    providers: [PhotoService],
})
export class PhotoModule { }