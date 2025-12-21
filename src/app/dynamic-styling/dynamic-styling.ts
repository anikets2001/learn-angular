import { Component } from '@angular/core';

@Component({
  selector: 'dynamic-styling',
  imports: [],
  templateUrl: './dynamic-styling.html',
  styleUrl: './dynamic-styling.css',
})
export class DynamicStyling {
  bgColor: string = 'red';
  color: string = 'white';
  width: string = '100%';

  isDarkMode: boolean = false;

  handleBgChange(color: string) {
    this.bgColor = color;
  }

  handleThemeChange() {
    if (this.isDarkMode) {
      this.color = 'white';
      this.bgColor = 'black';

      this.isDarkMode = false;
    } else {
      this.color = 'black';
      this.bgColor = 'white';
      
      this.isDarkMode = true;
    }
  }
}
