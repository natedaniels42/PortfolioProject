import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nathan Daniels';
  display: boolean = false;
  mobile: boolean = false;

  onResize(event: Event) {
    if ((event.target as Window).innerWidth <= 800) {
      this.mobile = true;
    } else {
      this.mobile = false;
      this.display = false;
    }
  }

  hamburger() {
    console.log('clicked');
    this.display ? this.display = false : this.display = true;
  }
}
