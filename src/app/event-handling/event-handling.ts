import { Component } from '@angular/core';

@Component({
  selector: 'event-handling',
  imports: [],
  templateUrl: './event-handling.html',
  styleUrl: './event-handling.css',
})
export class EventHandling {
  name: string = '';
  displayName: string = '';
  email: string = '';

  handleInputChange(event: Event): void {
    const element = event.target as HTMLInputElement;
    console.log('Input value changed to:', element.value);
    this.name = element.value;
  }

  handleGetName(): void {
    this.displayName = this.name;
  }

  handleSetName(name: string): void {
    this.displayName = name;
  }

  // email input handlers
  getEmail(value: string): void {
    const element = value;
    this.email = element;
  }

  setEmail(): void {
    this.email = 'aniket.singh@gmail.com';
  }
}
