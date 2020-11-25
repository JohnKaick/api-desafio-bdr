interface IGenericError {
  message: string;
  status?: string;
  statusCode?: number;
  details?: string[];
}

export default IGenericError;
