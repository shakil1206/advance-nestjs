import { Injectable } from '@nestjs/common';
import { FileAzureService } from './file.azure.service';
import { uuid } from 'uuidv4'
const getStream = require('into-stream')


@Injectable()
export class UploadAzureService {
    constructor(private readonly fileAzureService: FileAzureService) { }

    async addAvatar(buffer: Buffer, file: any) {
        const extension = file.originalname && file.originalname.split('.').pop();
        const blobName = this.getExtention(extension, uuid());
        const containername = process.env.CONTAINER_NAME;
        const stream = getStream(buffer);

        return await this.fileAzureService.createBlobFromStream(containername, blobName, stream, buffer);
    }

    public getExtention(extenstion: string, uuid: string) {
        const allowedFiles = ['jpg', 'png', 'gif', 'jepg', 'bmp', 'webp'];
        return `${uuid}.${allowedFiles.includes(extenstion) ? extenstion : 'jpeg'}`
    }


}