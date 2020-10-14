import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FpaswordComponent } from './fpasword/fpasword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login' ,component:LoginComponent,
    
  },
  {
    path: 'forgot' ,component:FpaswordComponent,
   
  },
  {
    path: 'dashboard' ,component:DashboardComponent,
  
  },
  {
    path: 'detail' ,component:DetailComponent,
    
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
