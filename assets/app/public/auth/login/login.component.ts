import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { moveIn, fallIn, moveInLeft, slideInOut, fadeInAnimation } from '../../../_animations/index';

import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn, fallIn, moveInLeft, fadeInAnimation],
  host: { '[@moveIn]': '' },
  providers: [LoginService],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;  
  error: string;
  hide = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    
    this.loginForm = new FormGroup({
      userName: new FormControl('',[Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
    
     this.returnUrl = this.route.snapshot.params['returnUrl'] || '/home/inicio';
  }

  onSubmit() {
    
    if(!this.loginForm.invalid && this.loginForm.dirty){
      
      let userName = this.loginForm.value['userName'];
      let password = this.loginForm.value['password'];

      this.loginService.validaUsuario(userName, password)
        .subscribe(data => {

          let result = data['user'];
          if(result['idUsuario'] > 0)
          {
            this.loginService.userLoginInfo(userName)
              .subscribe(resultData => {
                localStorage.setItem('currentUser', JSON.stringify(resultData));
                console.log(resultData);
                this.router.navigateByUrl(this.returnUrl);
                this.loginForm.reset();
              });
          }else{
            this.error = data['mensaje'];
            let snackBarRef = this.snackBar.open(data['mensaje'], 'Error!', { duration: 1500 });
          }  
        });

    }else{
        console.log(this.loginForm.errors);
    }
  }
}