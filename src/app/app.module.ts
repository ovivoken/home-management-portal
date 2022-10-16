import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './base_components/main/main.component';
import { NavbarComponent } from './base_components/navbar/navbar.component';
import { SidebarComponent } from './base_components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { EditRoomComponent } from './components/room-card/edit-room/edit-room/edit-room.component';
import { RoomCardComponent } from './components/room-card/view-room-card/room-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteRoomComponent } from './components/room-card/delete-room/delete-room/delete-room.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    RoomCardComponent,
    EditRoomComponent,
    DeleteRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
