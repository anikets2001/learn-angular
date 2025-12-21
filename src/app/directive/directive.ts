import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'directive',
  imports: [CommonModule],
  templateUrl: './directive.html',
  styleUrl: './directive.css',
})
export class Directive {
  loggedIn = true;

  users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
  ];

  userRole: 'admin' | 'user' | 'guest' = 'guest';

  handleLogin() {
    this.loggedIn = true;
  }

  handleLogout() {
    this.loggedIn = false;
  }

  handleChangeRole(role: 'admin' | 'user' | 'guest') {
    this.userRole = role;
  }
}
