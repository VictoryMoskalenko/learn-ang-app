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

  // tslint:disable-next-line:max-line-length
  img = 'https://banner2.kisspng.com/20180518/ptw/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575942028.3034008315266584216067.jpg'

  constructor() {
    setTimeout( () => {
      console.log('Timeout is over');
      this.img = 'https://angular.io/assets/images/logos/angular/angular.png' 
    }, 5000)
  }
}
