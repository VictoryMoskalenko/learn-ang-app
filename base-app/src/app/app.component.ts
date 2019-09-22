import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Dinamic title';
  number = 42;
  arr = [1, 2, 3, 4, 5];

  obj = { a: 1, b: {c: 2} }

  inputValue = '';

  // tslint:disable-next-line:max-line-length
  // img = 'https://banner2.kisspng.com/20180518/ptw/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575942028.3034008315266584216067.jpg'

  constructor() {

  }

  onInput(event: any) {
    console.log('Event', event);
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  onBlur(str: string) {
    this.inputValue = str
  }

  onClick() {
    console.log('Click!')
  }

}
