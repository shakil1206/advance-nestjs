import { Module } from '@nestjs/common';
import { database2Providers } from './database2.providers';

@Module({
    providers: [...database2Providers],
})
export class Database2Module { }