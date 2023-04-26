import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstViewComponent } from './first-view/first-view.component';
import {AppRoutingModule} from "./app-routing-module/app-routing.module";
import { SecondViewComponent } from './second-view/second-view.component';
import { ThirdViewComponent } from './third-view/third-view.component';
import { FourthViewComponent } from './fourth-view/fourth-view.component';
import { FifthViewComponent } from './fifth-view/fifth-view.component';
import { SixthViewComponent } from './sixth-view/sixth-view.component';
import { SeventhViewComponent } from './seventh-view/seventh-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstViewComponent,
    SecondViewComponent,
    ThirdViewComponent,
    FourthViewComponent,
    FifthViewComponent,
    SixthViewComponent,
    SeventhViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
