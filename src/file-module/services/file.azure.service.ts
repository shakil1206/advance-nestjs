import { Injectable } from '@nestjs/common';
import * as Storage from 'azure-storage';
import { resolve } from 'path';
import { Readable } from 'stream';

@Injectable()
export class FileAzureService {

    private blobService: Storage.BlobService;

    constructor() { }

    private async getBlobServiceInstance() {
        if (this.blobService) {
            return this.blobService;
        }
        return Storage.createBlobService(process.env.CONNECTION_STRING!)
    }

    public async createBlobFromStream(
        containerName: string,
        blobName: string,
        stream: Readable,
        buffer: Buffer): Promise<Storage.BlobService.BlobResult> {

        this.blobService = await this.getBlobServiceInstance();
        return new Promise((resolve, reject) => {
            return this.blobService
                .createBlockBlobFromStream(containerName, blobName, stream, Buffer.byteLength(buffer), (error, res) => {
                    if (!error) {
                        resolve(res)
                    } else {
                        reject(error)
                    }
                })
        })
    }


}