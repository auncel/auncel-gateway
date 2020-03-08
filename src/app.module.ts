import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { JudgeModule } from './judge/judge.module';
import judgeConfig from './config/judge.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [judgeConfig],
    }),
    JudgeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
