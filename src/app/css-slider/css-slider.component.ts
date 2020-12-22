import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-slider',
  templateUrl: './css-slider.component.html',
  styleUrls: ['./css-slider.component.css']
})
export class CssSliderComponent implements OnInit {
 /*  phone: Phone = new Phone("", 0, "");
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

  addPhone(title:NgModel, price: NgModel, comp: NgModel){
      console.log(title);
      console.log(price);
      console.log(comp); */

  title = '';
  constructor() {

  }

  ngOnInit(): void {

    /* this.title(){
      console.log()
    }


  function currentDiv(n) {
    showDivs(slideIndex = n);
  }

  function showDivs(n) {
    let i;
    const x = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('demo');
    if (n > x.length) {slideIndex = 1; }
    if (n < 1) {slideIndex = x.length; }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' w3-opacity-off', '');
    }
    x[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' w3-opacity-off';
  }*/
 }
}
