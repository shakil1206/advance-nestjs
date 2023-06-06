import { Module } from '@nestjs/common';
import { CatModule } from './domain/cat.module';
// import { DatabaseModule } from './database/database.module';
import { UserModule } from './user-module/user.module';
import { FileModule } from './file-module/file-module';
import { DatabaseModule2 } from './Database2/database2.module';
import Category from './entities/Category';
import Comment from './entities/Comment';
import Post from './entities/Post';
import Tag from './entities/Tag';
import User from './entities/User';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    CatModule,
    FileModule,
    DatabaseModule,
    UserModule,
    DatabaseModule2.forRoot({
      entities: [
        Category,
        Comment,
        Post,
        Tag,
        User
      ]
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
