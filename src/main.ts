import { SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createDocument } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  SwaggerModule.setup('/api/v1', app, createDocument(app))

  await app.listen(process.env.PORT || 3000);
  console.log(`Server is running on http://localhost:${process.env.PORT || 3000}`);
}
bootstrap();
