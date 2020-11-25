import { IGenericError } from '../../interfaces';

class HttpError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly status: string;

  public readonly details: string[] | undefined;

  constructor({
    message,
    statusCode = 500,
    status = 'error',
    details,
  }: IGenericError) {
    this.message = message;
    this.statusCode = statusCode;
    this.status = status;
    this.details = details;
  }
}

export default HttpError;
