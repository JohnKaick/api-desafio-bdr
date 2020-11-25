import { HttpError } from '.';
import { IGenericError } from '../../interfaces';

class Unauthorized extends HttpError {
  constructor({ message, status = 'Unauthorized', details }: IGenericError) {
    super({ message, status, statusCode: 401, details });
  }
}

export default Unauthorized;
