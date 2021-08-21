import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  constructor(
    private router: Router,
    private authService: AuthService,) { }


  //  On submit click, reset field value
  onSubmit() {
    this.authService.login();
    this.router.navigate(['/dashboard'])
  }

  // On ResetPassword link click
  onResetPassword() {
    //this.router.navigate(['reset-password2'], { relativeTo: this.route.parent });
  }

  ngOnInit() {
  }


}
