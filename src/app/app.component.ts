import { Component } from '@angular/core';
import { timeout } from 'q';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component7is';
  backgroundToggle = false;
  backgraundTheme = false;
  message = 'Привет, мир!';
  InputValue = '';




  human = [
    {
      name: 'Vt',
      lastName: [
        {
          familia: 'IegDast1'
      }
    ],
      vozrast: 36,
      rost: 183,
      ves: 73,
      imageUrl: '/assets/images/naushniki-3.webp',
    },
    {
      name: 'Svetka',
      lastName: [
        {
          familia: 'IegDast2'
      }
    ],
      vozrast: 45,
      rost: 160,
      ves: 48,
      imageUrl: '/assets/images/naushniki-3.webp',
    },
    {
      name: 'Nazir',
      lastName: [
        {
          familia: 'IegDast 3'
      }
    ],
      vozrast: 4,
      rost: 83,
      ves: 20,
      imageUrl: '/assets/images/naushniki-3.webp',
    },
    {
      name: 'Alexey',
      lastName: [
        {
          familia: 'IegDast4'
      }
    ],
      vozrast: 4,
      rost: 82,
      ves: 19,
      imageUrl: '/assets/images/naushniki-3.webp',
    },
    {
      name: 'Atka',
      lastName: [
        {
          familia: 'IegDast2'
      }
    ],
      vozrast: 45,
      rost: 160,
      ves: 48,
      imageUrl: '/assets/images/naushniki-3.webp',
    },
  ];

msgHallow(ev)
{console.log('message');
  alert(this.message) }

  onInput(event?: any ) {
    console.log('Event', event)
    this.InputValue = event.target.value
  }

  constructor() {
   setTimeout(() => {
      console.log('3 sec end')
      this.message = 'Поросячий мир'
    }, 3000);
  }

  // tslint:disable-next-line: member-ordering




  // tslint:disable-next-line: align
  //
  /* themes: NewType[] = [
    {value: 'backgroundToggle', viewValue: 'Темная'},
    {value: 'backgraundTheme', viewValue: 'Светлая'},
    {value: '!backgroundToggle', viewValue: 'Лето'},
    {value: '!backgraundTheme', viewValue: 'Зима'}
  ]; */
}
