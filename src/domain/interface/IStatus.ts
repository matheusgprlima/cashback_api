import { IAcquisition } from './IAcquisition'

export interface IStatus {
    id: number;
    description: string;
    acquisition?: IAcquisition[];
  }
