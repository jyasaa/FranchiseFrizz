import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { HarrypotterComponent } from './harrypotter/harrypotter.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},

  {path:"",component:StartComponent,pathMatch:'full'},

  {path:"harrypotter",component:HarrypotterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
