import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService, ConfigType } from '@nestjs/config';
import judgeConfig from './config/judge.config';

@Controller()
export class AppController {
  constructor(
    @Inject(judgeConfig.KEY)  private config: ConfigType<typeof judgeConfig>,
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    console.log('this.configService', this.configService.get('judge.host'));
    console.log('this.config', this.config)
    return this.appService.getHello();
  }
}
