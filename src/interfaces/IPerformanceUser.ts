import IUser from './IUser';

interface IPerformanceUser {
  user: IUser;
  countTask: {
    open: number;
    doing: number;
    finished: number;
  };
}

export default IPerformanceUser;
