import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.HTTP_PORT, () => {
    console.log(`NestJS app running on port: ${process.env.HTTP_PORT}`);
  });
}
bootstrap();
