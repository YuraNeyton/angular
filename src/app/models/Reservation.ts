import {Place} from './Place';

export class Reservation {
  constructor(
    public id: number = null,
    public hourStart: number = null,
    public hourEnd: number = null,
    public minStart: number = null,
    public minEnd: number = null,
    public username: string = null,
    public places: Place[]
  ) {
  }
}
