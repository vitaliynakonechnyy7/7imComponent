import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.css']
})
export class ImagesGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

/*images = [];
  ngOnInit(): void {
     'images'; [
     {title: 'image1', imageUrls: './assets/images/home.jpg'},
     {title: 'image2' , imageUrls: './assets/images/protect2.jpg', './assets/images/iceland-waterfalls1.jpg'},
     {title: 'image3', imageUrls: './assets/images/iceland-waterfalls1.jpg'},
     {title: 'image4 ', ' imageUrls: ' './assets/images/isl 4.jpeg'}
    ];
   }
      title: 'Пробрасываем title',
             'Пробрасываем 2 title',
             'Пробрасываем 3 title',
      imageUrls: [

        './assets/images/protect2.jpg', './assets/images/iceland-waterfalls1.jpg',
        './assets/images/iceland-waterfalls1.jpg',
        './assets/images/isl 4.jpeg'
      ]
    };

imgGallary = [
  'https://images-na.ssl-images-amazon.com/images/I/41ALWMrG99L.jpg',
  'https://elko.is/media/catalog/product/cache/56d83b2084e74fedc15fbbaa64126cd3/8/4/843040-107713.jpg'
  */
