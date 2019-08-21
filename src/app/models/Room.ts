import {CustomDate} from './CustomDate';
import {Reservation} from './Reservation';

export class Room {
  constructor(
    public id: number = null,
    public name: string = null,
    public date: CustomDate,
    public reservation: Reservation[]
  ) {
  }
}
