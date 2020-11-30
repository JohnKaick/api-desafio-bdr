import IUser from './IUser';

interface IPerformanceUser {
  user: IUser;
  count: {
    open: number;
    doing: number;
    finished: number;
  };
}

export default IPerformanceUser;
