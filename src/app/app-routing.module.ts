import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GoogleloginComponent } from './googlelogin/googlelogin.component'; // Import your components
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: GoogleloginComponent },
  {path:'home',component:HomeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
 // Redirect to login by default

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




