import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { JUDGE_CENTER_TCP_HOST, JUDGE_CENTER_TCP_PORT } from 'src/config';
import { JudgeController } from './judge.controller';

@Module({
  imports: [
    ClientsModule.register([{
      name: 'JUDGE_CENTER',
      transport: Transport.TCP,
      options: {
        host: JUDGE_CENTER_TCP_HOST,
        port: JUDGE_CENTER_TCP_PORT,
      },
    }]),
    ConfigService,
  ],
  controllers: [JudgeController],
})
export class JudgeModule {}
