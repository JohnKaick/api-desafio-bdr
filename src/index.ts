import Server from './main/server';
import keys from './config';

new Server().start(keys.PORT);
