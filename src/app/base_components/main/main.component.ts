import { Component, Input } from "@angular/core";
import { PropertyLocation, Room, Sensor } from "src/app/app.models";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  @Input() selectedLocation: any = {};
}
