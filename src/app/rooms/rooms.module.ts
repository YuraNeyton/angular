import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RoomsComponent} from './rooms.component';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule, MatFormFieldModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CalendarComponent} from '../calendar/calendar.component';
import {RoomgridComponent} from '../roomgrid/roomgrid.component';
import {MatCardModule} from '@angular/material/card';
import {SingleroomComponent} from '../singleroom/singleroom.component';
import {MatButtonModule} from '@angular/material/button';
const routes: Routes = [
  {
    path: '', children: [
      {
        path: '', component: RoomsComponent,
        children: [{path: ':id/:idR', component: SingleroomComponent}]
      }
    ]
  }
];

@NgModule({
  declarations: [RoomsComponent, CalendarComponent, RoomgridComponent, SingleroomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [RouterModule]
})
export class RoomsModule {
}
