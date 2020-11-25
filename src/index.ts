import 'reflect-metadata';
import Server from './main/server';
import keys from './config';
import Database from './database';

new Database().start();
new Server().start(keys.PORT);
