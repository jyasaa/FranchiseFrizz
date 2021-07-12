import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { HarrypotterComponent } from './harrypotter/harrypotter.component';
import { JamesbondComponent } from './jamesbond/jamesbond.component';
import { JurassicworldComponent } from './jurassicworld/jurassicworld.component';
import { MissionimpossibleComponent } from './missionimpossible/missionimpossible.component';
import { JohnwickComponent } from './johnwick/johnwick.component';
import { PiratesofthecaribbeanComponent } from './piratesofthecaribbean/piratesofthecaribbean.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    HarrypotterComponent,
    JamesbondComponent,
    JurassicworldComponent,
    MissionimpossibleComponent,
    JohnwickComponent,
    PiratesofthecaribbeanComponent,
    StoreComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
