import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {LoginPages} from './pages/login.pages';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, LoginPages,],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'frontend';
}
