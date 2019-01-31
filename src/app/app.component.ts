import { Component } from '@angular/core';
import { bindCallback } from 'rxjs';
import { resolve } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise(
    // tslint:disable-next-line:no-shadowed-variable
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
          () => {
          resolve(date);
        }, 2000
      );
    }
  );
 // lastUpdate = new Date();
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Télévision',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    console.log('On allume tout !');
  }
}
