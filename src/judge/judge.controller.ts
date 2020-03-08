/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Sunday, 8th March 2020 10:55 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Sunday, 8th March 2020 10:55 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import { Controller, Inject, Get } from '@nestjs/common';
import { Observable } from 'rxjs'
import { ClientProxy } from '@nestjs/microservices'

@Controller('judge')
export class JudgeController {
  constructor(
    @Inject('JUDGE_CENTER') private readonly client: ClientProxy,
  ) {}

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  @Get()
  getRenderTree(): Observable<string> {
    const pattern = { cmd: 'getRenderTree' };
    const payload = ["<div>Text</div>", 'div{ color: green; }'];
    return this.client.send<string>(pattern, payload);
  }
}
