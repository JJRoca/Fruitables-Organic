import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  user: User = {
    username: '',
    password: '',
  };

  constructor(private router: Router) {}

  onLogin() {
    console.log(this.user);
    if (this.user.username == 'admin' && this.user.password == 'admin') {
      console.log('Login correcto');
      this.router.navigateByUrl('/products');
    }else
    {
      console.log('Login incorrecto');
      alert('Usuario o contraseña incorrectos');
    }
  }
}
