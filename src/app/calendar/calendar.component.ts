import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../service/calendar.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  selectedDate: Date;

  constructor(
    private calendarService: CalendarService,
    private rouret: Router,
  ) {
  }

  ngOnInit() {
    this.selectedDate = new Date();
    this.calendarService.calendarSubject.next(this.selectedDate);
  }

  onSelect(event) {
    this.selectedDate = event;
    console.log(event + '1');
    this.calendarService.calendarSubject.next(this.selectedDate);
  }

  redirect() {
    this.rouret.navigate(['/rooms']);
  }
}
