import { Routes } from '@angular/router';
import { CounterComponent } from './counter.component';
import { UiComponent } from './pages/ui.component';
export const COUNTER_ROUTES_TWO: Routes = [
  {
    path: '',
    component: CounterComponent,
    children: [],
  },
  {
    path: 'ui',
    component: UiComponent,
  },
];
