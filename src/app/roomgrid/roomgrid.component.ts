import {Component, OnInit} from '@angular/core';
import {Room} from '../models/Room';
import {RoomsService} from '../service/rooms.service';
import {CalendarService} from '../service/calendar.service';

@Component({
  selector: 'app-roomgrid',
  templateUrl: './roomgrid.component.html',
  styleUrls: ['./roomgrid.component.css']
})
export class RoomgridComponent implements OnInit {
  rooms: Room[] = [];
  date = new Date();
  constructor(
    private roomService: RoomsService,
    private calendarService: CalendarService
  ) {
  }

  ngOnInit() {
    this.getRooms(this.date);
    this.calendarService.calendarSubject.subscribe((value: Date) => {
      this.getRooms(value);
    });
  }
  getRooms(date) {
    this.roomService.getRooms(date).subscribe(rooms =>
      this.rooms = rooms
    );
  }
}
