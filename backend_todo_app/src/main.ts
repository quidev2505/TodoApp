import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //This line is important for CORS to transfer data between frontend and backend
  //Call api is allow accept call api from other origin
  // Enable CORS
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8000);
}
bootstrap();
