import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
import * as cors from 'cors'

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(process.env.HTTP_PORT, () => {
    console.log(`NestJS app running on port: ${process.env.HTTP_PORT}`);
  });
}
bootstrap();
