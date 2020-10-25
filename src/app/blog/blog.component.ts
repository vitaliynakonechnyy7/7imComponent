import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent  {
  contentCard  = [
    {
      title: 'Мы и вы - ключ!',
      subtitle: 'Среда, 5 августа 2020 г.',
      textCard: 'Мы заботимся о наших к и на распродажах.',
      coments: [{
        title2: 'Гигантский фестиваль электронных велосипедов Ellingsen в Гранди!',
        subtitle2: 'Четверг, 4 июня 2020 г.',
        textCard2: 'Гигантский фестиваль электрических велосипедов Ellingsen будет',
      }]
    }
    ]
}
