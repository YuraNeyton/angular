import {User} from './User';

export class Place {
  constructor(
    public id: number = null,
    public number: number = null,
    public user: User,
  ) {
  }
}
