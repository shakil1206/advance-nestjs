import { Injectable } from '@nestjs/common';
import { FileS3Service } from './file.s3.service';

@Injectable()
export class UploadS3Service {
    constructor(private readonly fileS3Service: FileS3Service) { }

    async addAvatar(imageBuffer: Buffer, fileName: string) {
        return this.fileS3Service.uploadFile(imageBuffer, fileName);
    }
}