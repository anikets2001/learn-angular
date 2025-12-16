import { Component } from '@angular/core';

@Component({
  selector: 'control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  display: boolean = true;
  btnText: string = 'Show';
  color: string = 'blue';
  age: number = 25;
  users = ['Aniket', 'Nikhil', 'Hemant', 'Anik'];
  items = ['Apple', 'Banana', 'Mango', 'Orange'];
  // items = []


  handleToggle():void {
    this.display = !this.display;
    this.btnText = this.display ? 'Hide' : 'Show';
  }

  handleColorChange(color:string): void{
    this.color = color;
  }

  handleAgeChange(event: Event): void{
      const value = (event.target as HTMLInputElement).value;
      console.log("age value:", value);
      this.age = value ? Number.parseInt(value) : 0;
  }
}
