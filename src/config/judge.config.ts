/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Sunday, 8th March 2020 11:19 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Sunday, 8th March 2020 11:19 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import { registerAs } from '@nestjs/config'
import { JUDGE_CENTER_TCP_HOST, JUDGE_CENTER_TCP_PORT } from 'src/config';

export default registerAs('judge', () => ({
  host: JUDGE_CENTER_TCP_HOST,
  port: JUDGE_CENTER_TCP_PORT,
}));