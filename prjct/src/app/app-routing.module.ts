import { FeaturesComponent } from './components/features/features.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'aboutus' , component : AboutusComponent},
  {path : 'signin' , component : SigninComponent},
  {path : 'features' , component : FeaturesComponent},
  {path : 'signup' , component : SignupComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
