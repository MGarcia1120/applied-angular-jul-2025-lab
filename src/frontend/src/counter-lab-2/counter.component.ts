import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-counter-two',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>Counter Stuff Goes Here</div>
    <a href="counter-lab-2/ui">UI</a>
  `,
  styles: ``,
})
export class CounterComponent {
  //   links = signal([{ label: 'UI', href: ['ui'] }]);
}
