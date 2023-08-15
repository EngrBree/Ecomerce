import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { UserAuthService } from '../Services/user-auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  private loginSubscription: Subscription | undefined;


  constructor(private userService:UserService,private userAuthService:UserAuthService,private router:Router) { }
  

  ngOnInit(): void {
  }
  login(loginForm: NgForm){
   this.loginSubscription= this.userService.login(loginForm.value).subscribe(
    (response:any)=>{
      

      this.userAuthService.setRoles(response.user.role);
      this.userAuthService.setToken(response.jwtToken);
      console.log(response)


      const role = response.user.role[0].roleName;
      if (role === 'Admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
      }
    }
   )
  }
  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }  }

}
