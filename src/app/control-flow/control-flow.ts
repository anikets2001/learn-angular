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

  handleToggle():void {
    this.display = !this.display;
    this.btnText = this.display ? 'Hide' : 'Show';
  }
}
