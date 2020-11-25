import { createConnection, Connection } from 'typeorm';
import { Log } from '../common';

export default class Database {
  public async start(): Promise<Connection> {
    try {
      const connection = await createConnection({
        name: 'default',
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'test',
        password: 'test',
        database: 'db_test',
        entities: [`${__dirname}/models/**/*.ts`],
        synchronize: true,
      });
      if (!connection.isConnected) {
        Log.add.error('Database connection failed');
      }
      return connection;
    } catch (err) {
      throw Log.add.error(JSON.stringify(err));
    }
  }
}
