import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-light',
  templateUrl: './slider-light.component.html',
  styleUrls: ['./slider-light.component.css']
})
export class SliderLightComponent implements OnInit {
  title = 'test';
  date: Date = new Date()
  public isShown = true;
  
  img = [
    {
      productId: 1,
      productName: 'Mac',
      prise: 100,
      imageUrl: '/assets/images/naushniki-3.webp',
    },
    {
      productId: 2,
      productName: 'Samsung',
      prise: 100,
      imageUrl: '/assets/images/naushniki-4.webp',
    },
    {
      productId: 3,
      productName: 'sony',
      prise: 120,
      imageUrl: '/assets/images/naushniki-6.webp',
    },
    {
      productId: 4,
      productName: 'xiaomi',
      prise: 10,
      imageUrl: '/assets/images/naushniki-7.webp',
    },
    {
      productId: 5,
      productName: 'eva',
      prise: 100,
      imageUrl: '/assets/images/naushniki-4.webp',
    },
    {
      productId: 6,
      productName: 'mi',
      prise: 100,
      imageUrl: '/assets/images/naushniki-1.webp',
    },
    {
      productId: 7,
      productName: 'huawey',
      prise: 100,
      imageUrl: '/assets/images/naushniki-3.webp',
    },

  ];

  constructor() {
    /*let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("demo");
      let captionText = document.getElementById("caption");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += "active";
      captionText.innerHTML = dots[slideIndex - 1].alt;  */
    }

  ngOnInit(): void {
  }
}
