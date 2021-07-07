import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { HarrypotterComponent } from './harrypotter/harrypotter.component';
import { JohnwickComponent } from './johnwick/johnwick.component';
import { JamesbondComponent } from './jamesbond/jamesbond.component';
import { JurassicworldComponent } from './jurassicworld/jurassicworld.component';
import { MissionimpossibleComponent } from './missionimpossible/missionimpossible.component';
import { PiratesofthecaribbeanComponent } from './piratesofthecaribbean/piratesofthecaribbean.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},

  {path:"",component:StartComponent,pathMatch:'full'},

  {path:"harrypotter",component:HarrypotterComponent},

  {path:"jamesbond",component:JamesbondComponent},

  {path:"johnwick",component:JohnwickComponent},

  {path:"jurassicworld",component:JurassicworldComponent},

  {path:"missionimpossible",component:MissionimpossibleComponent},

  {path:"piratesofthecaribbean",component:PiratesofthecaribbeanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
