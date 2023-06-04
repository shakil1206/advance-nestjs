import { Module } from '@nestjs/common';
import { CatModule } from './domain/cat.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user-module/user.module';
@Module({
  imports: [CatModule, DatabaseModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
