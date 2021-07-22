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
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';
import { HarrypotterStoreComponent } from './harrypotter-store/harrypotter-store.component';
import { JamesbondStoreComponent } from './jamesbond-store/jamesbond-store.component';
import { JohnwickStoreComponent } from './johnwick-store/johnwick-store.component';
import { JurassicworldStoreComponent } from './jurassicworld-store/jurassicworld-store.component';
import { MissionimpossibleStoreComponent } from './missionimpossible-store/missionimpossible-store.component';
import { PiratesofthecaribbeanStoreComponent } from './piratesofthecaribbean-store/piratesofthecaribbean-store.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BooksComponent } from './books/books.component';
import { FanGalleryComponent } from './fan-gallery/fan-gallery.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},

  {path:"",component:StartComponent,pathMatch:'full'},

  {path:"harrypotter",component:HarrypotterComponent},

  {path:"jamesbond",component:JamesbondComponent},

  {path:"johnwick",component:JohnwickComponent},

  {path:"jurassicworld",component:JurassicworldComponent},

  {path:"missionimpossible",component:MissionimpossibleComponent},

  {path:"piratesofthecaribbean",component:PiratesofthecaribbeanComponent},

  {path:"store",component:StoreComponent,children:[
    {path:"harrypotterStore",component:HarrypotterStoreComponent},
    {path:"jamesbondStore",component:JamesbondStoreComponent},
    {path:"johnwickStore",component:JohnwickStoreComponent},
    {path:"jurassicworldStore",component:JurassicworldStoreComponent},
    {path:"missionimpossibleStore",component:MissionimpossibleStoreComponent},
    {path:"piratesofthecaribbeanStore",component:PiratesofthecaribbeanStoreComponent},
    {path:"",component:HarrypotterStoreComponent,pathMatch:"full"}
  ]},

  {path:"login",component:LoginComponent},

  {path:"signup",component:SignupComponent},
  
  {path:"additems",component:AdditemsComponent},

  {path:"admin",component:AdminComponent},

  {path:"product",component:ProductComponent},

  {path:"footer",component:FooterComponent},

  {path:"cart",component:CartComponent},

  {path:"contactus",component:ContactusComponent},

  {path:"books",component:BooksComponent},

  {path:"fangallery",component:FanGalleryComponent},

  {path:"payment",component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
