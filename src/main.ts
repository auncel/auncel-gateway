import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { APP_PORT } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const config = app.get(ConfigService)
  await app.listen(APP_PORT);
}
bootstrap();
