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
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdditemsComponent } from './additems/additems.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},

  {path:"",component:StartComponent,pathMatch:'full'},

  {path:"harrypotter",component:HarrypotterComponent},

  {path:"jamesbond",component:JamesbondComponent},

  {path:"johnwick",component:JohnwickComponent},

  {path:"jurassicworld",component:JurassicworldComponent},

  {path:"missionimpossible",component:MissionimpossibleComponent},

  {path:"piratesofthecaribbean",component:PiratesofthecaribbeanComponent},

  {path:"store",component:StoreComponent},

  {path:"login",component:LoginComponent},

  {path:"signup",component:SignupComponent},
  
  {path:"additems",component:AdditemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
