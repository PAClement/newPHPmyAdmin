import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material-module";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarContentComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
