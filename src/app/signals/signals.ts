import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  constructor() {
    effect(()=> {
      console.log(`Count value changed: ${this.count()}`);
    })
  }

  handleCountChange(type: string) {
    if (type === 'inc') {
      this.count.update(prev => prev + 1);
    } else if (type === 'dec' && this.count()> 0) {
      this.count.set(this.count() - 1);
    }
  }
}