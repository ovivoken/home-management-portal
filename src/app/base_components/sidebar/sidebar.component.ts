import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Room, PropertyLocation } from "src/app/app.models";


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  selectedLocation: any = {};

  @Input() allLocations: PropertyLocation[] = []; 

  @Output() selectLocationEvent = new EventEmitter<string>();


  selectLocation(location: any) {
    if (location.id == this.selectedLocation.id) {
      this.selectLocationEvent.emit("");
      this.selectedLocation = {};
      return;
    }
    this.selectLocationEvent.emit(location.id);
    this.selectedLocation = location;
  }
}
