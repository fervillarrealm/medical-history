import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { moveIn, fallIn, moveInLeft, slideInOut, fadeInAnimation } from '../../../_animations/index';

import { LoginService } from '../login/login.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  animations: [moveIn, fallIn, moveInLeft, fadeInAnimation],
  host: { '[@moveIn]': '' },
  providers: [LoginService]
})
export class ChangePasswordComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;  
  error: string;
  hide = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    
    this.loginForm = new FormGroup({
      userName: new FormControl('',[Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
    
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    
    
    if(!this.loginForm.invalid && this.loginForm.dirty){
      
      let userName = this.loginForm.value['userName'];
      let password = this.loginForm.value['password'];
      let newPassword = this.loginForm.value['newPassword'];
      let confirmPassword = this.loginForm.value['confirmPassword'];

      this.loginService.validaUsuario(userName, password)
        .subscribe(params => {
          let result = params['user'][0];
          
          if(result['IdUsuario'] > 0)
          {
            this.loginForm.reset();
            this.router.navigateByUrl("login");
          }else{
            this.error = result['Mensaje'];
            let snackBarRef = this.snackBar.open(result['Mensaje'], 'Error!', { duration: 1500 });
          }  
        });

    }else{
        console.log(this.loginForm.errors);
    }
  }
}