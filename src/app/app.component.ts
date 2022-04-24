import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTest: boolean = false;
  title = 'pure-angular';

  goToTest() {
    this.showTest = !this.showTest;
  }
}
