import { Component } from "@angular/core";
import { Room, Sensor } from "./main.models";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  allRooms: Room[] = [
    { id: '1', name: 'Living Room', description: 'Example Description', floor: 1, sensors: ['1', '5', '6'] },
    { id: '2', name: 'Bedroom', description: 'Self Explanatory', floor: 2, sensors: ['1', '5', '10'] },
    { id: '3', name: 'Kitchen', description: 'Yessss, the best room', floor: 1, sensors: ['1', '5', '15'] }];


  allRoomSensors: Sensor[] = [];
}
