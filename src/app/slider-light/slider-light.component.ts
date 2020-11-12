import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-light',
  templateUrl: './slider-light.component.html',
  styleUrls: ['./slider-light.component.css']
})
export class SliderLightComponent implements OnInit {
  title = 'test';
  public isShown = true;
  img = [
   {
     productId : 1,
     productName: 'Mac',
     prise:  100,
     imageUrl: '/assets/images/naushniki-3.webp',
   },
   {
    productId : 2,
    productName: 'Samsung',
    prise:  100,
    imageUrl: '/assets/images/naushniki-4.webp',
  },
  {
    productId: 3,
    productName: 'sony',
    prise:  120,
    imageUrl: '/assets/images/naushniki-6.webp',
  },
  {
    productId: 4,
    productName: 'xiaomi',
    prise:  10,
    imageUrl: '/assets/images/naushniki-7.webp',
  },
  {
    productId: 5,
    productName: 'eva',
    prise:  100,
    imageUrl: '/assets/images/naushniki-4.webp',
  },
  {
    productId: 6,
    productName: 'mi',
    prise:  100,
    imageUrl: '/assets/images/naushniki-1.webp',
  },
  {
    productId: 7,
    productName: 'huawey',
    prise:  100,
    imageUrl: '/assets/images/naushniki-3.webp',
  },

 ];
  // phones: Phone[] = [];
  companies = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

  addPhone(){
      //  this.phones.push(new Phone(this.title, this.price, this.company));
  }

  constructor() { }


  ngOnInit(): void {
  }



}
