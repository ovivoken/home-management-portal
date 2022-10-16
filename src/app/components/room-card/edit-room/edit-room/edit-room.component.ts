import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Room } from 'src/app/app.models';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {

  room: any = {} as Room;

  roomForm: FormGroup;
  selectedSensors: SelectionModel<number> = new SelectionModel<number>(true, [])

  panelOpenStateExisting = false;
  panelOpenStateNew = false;

  allSensors: Array<number> = [...Array(40)].map(e => ~~(Math.random() * 40))

  constructor(public dialogRef: MatDialogRef<EditRoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    fb: FormBuilder) {
    this.room = data;

    this.roomForm = fb.group({
      id: new FormControl(this.room.id),
      name: new FormControl(this.room.name, Validators.required),
      floor: new FormControl(this.room.floor, Validators.required),
      description: new FormControl(this.room.description, Validators.required),
      sensors: new FormControl(this.room.sensors)
    });
  }

  ngOnInit(): void {
    this.selectedSensors.select(...this.room.sensors);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  checkSensor(sensor: any): void {
    if (this.selectedSensors.isSelected(sensor)) {
      this.selectedSensors.deselect(sensor)
    } else {
      this.selectedSensors.select(sensor);
    }
  }

  confirm(): void {
    if (this.roomForm.valid) {
      this.roomForm.value.sensors = this.selectedSensors.selected;
      this.dialogRef.close(this.roomForm.value)
    }
  }

  addSensor(sensor: any): void {
    if (!this.room.sensors.includes(sensor)) {
      this.room.sensors.push(sensor)
      this.selectedSensors = new SelectionModel(true, this.room.sensors);
      this.selectedSensors.select(sensor)
    }
  }
}
