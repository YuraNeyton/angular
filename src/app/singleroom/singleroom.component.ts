import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoomsService} from '../service/rooms.service';
import {Room} from '../models/Room';

@Component({
  selector: 'app-singleroom',
  templateUrl: './singleroom.component.html',
  styleUrls: ['./singleroom.component.css']
})
export class SingleroomComponent implements OnInit {
  room: Room;
  reservationId;

  constructor(
    private activatedRoute: ActivatedRoute,
    private roomService: RoomsService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(value => {
      this.reservationId = value.idR;
      this.roomService.getSingleRoom(value.id).subscribe(room => {
        this.room = room;
        console.log(this.room);
      });
    });
  }

}
