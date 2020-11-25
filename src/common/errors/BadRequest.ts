import { HttpError } from '.';
import { IGenericError } from '../../interfaces';

class BadRequest extends HttpError {
  constructor({ message, status = 'BadRequest', details }: IGenericError) {
    super({ message, status, statusCode: 400, details });
  }
}

export default BadRequest;
