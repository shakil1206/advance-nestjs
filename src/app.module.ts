import { Module } from '@nestjs/common';
import { CatModule } from './domain/cat.module';
@Module({
  imports: [CatModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
