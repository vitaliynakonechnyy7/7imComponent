import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component7is';
  backgroundToggle = false;
  backgraundTheme = false;

  /* themes: NewType[] = [
    {value: 'backgroundToggle', viewValue: 'Темная'},
    {value: 'backgraundTheme', viewValue: 'Светлая'},
    {value: '!backgroundToggle', viewValue: 'Лето'},
    {value: '!backgraundTheme', viewValue: 'Зима'}
  ]; */
}
