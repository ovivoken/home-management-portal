import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Room } from 'src/app/app.models';
import { DeleteRoomComponent } from '../delete-room/delete-room/delete-room.component';
import { EditRoomComponent } from '../edit-room/edit-room/edit-room.component';

@Component({
  selector: 'room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  @Input() room: Room = {} as Room;

  allSensors: Array<any> = [...Array(40)].map(e => ~~(Math.random() * 40))

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openEditDialog(room: any) {
    const dialogRef = this.dialog.open(EditRoomComponent, { data: room });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.room = result as Room;
      }
    });
  }

  openDeleteDialog(room: any) {
    const dialogRef = this.dialog.open(DeleteRoomComponent, { data: room });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Room with id ${room.id} is deleted!`)
      }
    });
  }

}
