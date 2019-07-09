import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }

  loginForm = this.fb.group({
    userInput : [''],
    passInput : ['']
  });

  ngOnInit() {
  }

  navigate() {
    if (this.loginForm.get('userInput').value === 'daniel' && this.loginForm.get('passInput').value === '123') {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginForm.reset();
      alert('Usuário incorreto');
    }
  }

}
