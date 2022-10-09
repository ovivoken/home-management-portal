import { Component } from '@angular/core';
import { Room, PropertyLocation } from "src/app/app.models";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home-management-portal';

  selectedLocation: any = "";

  allLocations: PropertyLocation[] = [{
    id: '1', name: "House", rooms: [
      { id: '1', name: 'Living Room', description: 'Example Description', floor: 1, sensors: ['1', '5', '6'] },
      { id: '2', name: 'Bedroom', description: 'Self Explanatory', floor: 2, sensors: ['1', '5', '10'] },
      { id: '3', name: 'Kitchen', description: 'Yessss, the best room', floor: 1, sensors: ['1', '5', '15'] }]
  },
  { id: '2', name: "Green House", rooms: [{ id: '4', name: 'Main room', floor: 1, description: '', sensors: [] }] }];

  selectLocation(location: string){
    if(location == "") this.selectedLocation = {};
    this.selectedLocation = this.allLocations.find(i=> i.id == location);
    console.log(this.selectedLocation)
  }
}
