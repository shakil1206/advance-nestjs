import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';


@Injectable()
export class FileS3Service {
    constructor() { }

    async uploadFile(imageBuffer: Buffer, fileName: string) {
        const s3 = new S3();
        return await s3.upload({
            Bucket: process.env.BUCKET_NAME!,
            Body: imageBuffer,
            Key: `${fileName}`
        }).promise();

    }


    async deleteFile(key: string) {
        const s3 = new S3();
        return await s3.deleteObject({
            Bucket: process.env.BUCKET_NAME!,
            Key: key
        }).promise();

    }

}