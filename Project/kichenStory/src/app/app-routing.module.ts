import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [

  //path to redirect
  {"path":"home",component:HomeComponent},
  {"path":"about",component:AboutComponent},
  {"path":"contact",component:ContactComponent},
  {"path":"admin",component:AdminComponent},
  {"path":"payment",component:PaymentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
