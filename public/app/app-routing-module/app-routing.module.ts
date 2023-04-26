import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FirstViewComponent} from "../first-view/first-view.component";
import {SecondViewComponent} from "../second-view/second-view.component";
import {ThirdViewComponent} from "../third-view/third-view.component";
import {FourthViewComponent} from "../fourth-view/fourth-view.component";
import {FifthViewComponent} from "../fifth-view/fifth-view.component";
import {SixthViewComponent} from "../sixth-view/sixth-view.component";
import {SeventhViewComponent} from "../seventh-view/seventh-view.component";

const routes: Routes = [
  {path: '', component: FirstViewComponent},
  {path: 'firstView', component: FirstViewComponent},
  {path: 'secondView', component: SecondViewComponent},
  {path: 'thirdView', component: ThirdViewComponent},
  {path: 'fourthView', component: FourthViewComponent},
  {path: 'fifthView', component: FifthViewComponent},
  {path: 'sixthView', component: SixthViewComponent},
  {path: 'seventhView', component: SeventhViewComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
