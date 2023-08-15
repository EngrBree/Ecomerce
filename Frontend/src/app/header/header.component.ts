import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { UserAuthService } from '../Services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userAuthService:UserAuthService,
    private router:Router,
    public userService:UserService,
    private zone:NgZone,
    private changeDetector:ChangeDetectorRef

    
    ) { }

  ngOnInit(): void {
  }
  public login(){
    this.changeDetector.detectChanges();
  }
  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();

  }
  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }
  

}
