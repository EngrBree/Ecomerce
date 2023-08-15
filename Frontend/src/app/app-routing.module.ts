import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ForbbidenComponent } from './forbbiden/forbbiden.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserComponent},
  {path:'forbbiden',component:ForbbidenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
