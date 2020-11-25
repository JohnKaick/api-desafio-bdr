import 'express-async-errors';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import routes from '../routes';
import { errorHandler } from '../middlewares';
import { Log } from '../../common';

class Server {
  public app: Express;

  constructor() {
    this.app = express();
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(routes);
    this.app.use(errorHandler);
  }

  public start(port: number): void {
    this.app
      .listen(port, () => {
        Log.add.info(`Server started on port ${port}`);
      })
      .on('error', err => Log.add.error(JSON.stringify(err)));
  }
}

export default Server;
