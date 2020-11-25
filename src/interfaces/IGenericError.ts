export default interface IGenericError {
  message: string;
  status?: string;
  statusCode?: number;
  details?: string[];
}
