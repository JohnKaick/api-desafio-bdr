import * as dotenv from 'dotenv';
import Server from './main/server';

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case 'production':
    path = `${__dirname}/../.env.production`;
    break;
  default:
    path = `${__dirname}/../.env.development`;
}
dotenv.config({ path });

new Server().start(Number(process.env.PORT));
