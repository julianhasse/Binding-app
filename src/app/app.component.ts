import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle = true;
  toggle2 = true;
  title = 'click me!';
  color = 'white';
  products: any[] = ['Apple', 'Smasung', 'Panasonic', 'Sony'];

  changeTitle() {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.title = 'Second Title';
    } else {
      this.title = 'First Title';
    }
  }

  changeColor() {
    this.toggle2 = !this.toggle2;
    if (this.toggle2) {
      this.color = 'white';
    } else {
      this.color = '#BADA55';
    }
  }

}
