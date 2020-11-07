import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-light',
  templateUrl: './slider-light.component.html',
  styleUrls: ['./slider-light.component.css']
})
export class SliderLightComponent implements OnInit {
  title: string;
  price: number;
  company: string;

  phones: Phone[] = [];
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

  addPhone(){
      this.phones.push(new Phone(this.title, this.price, this.company));
  }

  constructor() { }
  

  ngOnInit(): void {
  }



}
