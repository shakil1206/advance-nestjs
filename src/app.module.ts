import { Module } from '@nestjs/common';
import { CatModule } from './domain/cat.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user-module/user.module';
import { FileModule } from './file-module/file-module';
@Module({
  imports: [CatModule, DatabaseModule, UserModule, FileModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
