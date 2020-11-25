import { createLogger, format, transports, Logger } from 'winston';

class Log {
  static add: Logger = createLogger({
    // To see more detailed errors, change this to 'debug'
    level: 'info',
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
    transports: [new transports.Console()],
  });
}

export default Log;
