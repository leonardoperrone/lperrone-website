import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  AboutComponent},
  { path: 'skills', component: HomeComponent }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
})

export class AppRoutingModule {
}



