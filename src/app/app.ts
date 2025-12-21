import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';
import { Mycomp } from './mycomp/mycomp';
import { EventHandling } from './event-handling/event-handling';
import { ControlFlow } from './control-flow/control-flow';
import { Signals } from './signals/signals';
import { Effect } from './effect/effect';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { DynamicStyling } from './dynamic-styling/dynamic-styling';
import { Directive } from './directive/directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup, Profile, Mycomp, EventHandling, ControlFlow, Signals, Effect, TwoWayBinding, DynamicStyling, Directive],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  name: string = 'Aniket'; //property binding
  x: any = 2;
  y: any = 3;
  userName: string = 'Peter';

  handleClick() {
    //event binding
    console.log('Button Clicked');
    this.anotherFunction();
    this.y = {};
  }

  anotherFunction() {
    console.log('Welcome to Angular');
    this.name = 'Anik';
    this.x = true;
    this.y = false;
  }

  handleIncrement() {
    this.x += 1;
  }

  handleDecrement() {
    if (this.y > 0) this.y -= 1;
  }

  handleEvent($event: any) {
    console.log($event);
  }

  //  Get and set input value

  displayName = '';
  showName = '';

  handleNameInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.showName = value;
  }

  handleDisplayName() {
    this.displayName = this.showName;
    console.log('Display Name is ', this.displayName);
  }

  // get email
  email: string = '';

  handleEmail(value: string) {
    this.email = value;
    console.log('Email is ', value);
  }
}
