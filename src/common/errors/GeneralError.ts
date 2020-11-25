import { HttpError } from '.';
import { IGenericError } from '../../interfaces';

class GeneralError extends HttpError {
  constructor({ message, status = 'GeneralError', details }: IGenericError) {
    super({ message, status, statusCode: 500, details });
  }
}

export default GeneralError;
