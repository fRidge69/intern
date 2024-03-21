import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { BoxComponent } from './box/box.component';
import { FormsModule } from '@angular/forms';
import {  Task2Component,  } from './task2/task2.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    BoxComponent,
    Task2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
