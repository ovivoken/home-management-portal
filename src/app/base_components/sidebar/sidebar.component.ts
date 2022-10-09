import { Component } from "@angular/core";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  selectedEntity: any = "";

  allLocations: any[] = [{ id: 1, name: "House" }, { id: 2, name: "Green House" }];

  selectRow(row: any){
    if(row.id == this.selectedEntity.id){
      this.selectedEntity = "";
      return;
    }
    this.selectedEntity = row;
  }
}
