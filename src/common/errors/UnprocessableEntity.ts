import { HttpError } from '.';
import { IGenericError } from '../../interfaces';

class UnprocessableEntity extends HttpError {
  constructor({ message, status = 'ValidationError', details }: IGenericError) {
    super({ message, status, statusCode: 422, details });
  }
}

export default UnprocessableEntity;
