import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Room} from '../models/Room';
import {CustomDate} from '../models/CustomDate';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  url = 'http://localhost:8080/rooms';
  urlSingle = 'http://localhost:8080/rooms';

  constructor(
    private http: HttpClient,
  ) {
  }

  getSingleRoom(id: number): Observable<Room> {
    return this.http.get<Room>(this.urlSingle + '/' + id);
  }

  getRooms(date: Date): Observable<Room[]> {
    const s = date.toDateString();
    console.log(s);
    const strings = s.split(' ');
    return this.http.post<Room[]>(this.url, new CustomDate(0, strings[0], strings[1], strings[2], strings[3]));
  }
}
