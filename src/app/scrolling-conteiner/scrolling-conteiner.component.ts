import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling-conteiner',
  templateUrl: './scrolling-conteiner.component.html',
  styleUrls: ['./scrolling-conteiner.component.css']
})
export class ScrollingConteinerComponent implements OnInit {
  img = [
    {
      productId: 1,
      productName: 'Mac',
      prise: 100,
      imageUrl: '/assets/images/isl-hause.webp',
    },
    {
      productId: 2,
      productName: 'Samsung',
      prise: 100,
      imageUrl: '/assets/images/isl-ice.webp',
    },
    {
      productId: 3,
      productName: 'sony',
      prise: 120,
      imageUrl: '/assets/images/isl-home2.webp',
    },
    {
      productId: 4,
      productName: 'xiaomi',
      prise: 10,
      imageUrl: '/assets/images/istock-isl.webp',
    },
    {
      productId: 5,
      productName: 'eva',
      prise: 100,
      imageUrl: '/assets/images/waterfall.webp',
    },
    {
      productId: 6,
      productName: 'mi',
      prise: 100,
      imageUrl: '/assets/images/Waterfall-Iceland.webp',
    },
    {
      productId: 7,
      productName: 'huawey',
      prise: 100,
      imageUrl: '/assets/images/islandia-etiqueta.webp',
    },

  ];
constructor() {
  /* (function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('card').scrollLeft -= (delta * 40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('card').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('card').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('card').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    }
  })();*/
}

ngOnInit(): void {
  }

}

 /* (function() {
  function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.getElementById('card').scrollLeft -= (delta*40); // Multiplied by 40
      e.preventDefault();
  }
  if (document.getElementById('card').addEventListener) {
      // IE9, Chrome, Safari, Opera
      document.getElementById('card').addEventListener("mousewheel", scrollHorizontally, false);
      // Firefox
      document.getElementById('card').addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
      // IE 6/7/8
      document.getElementById('card').attachEvent("onmousewheel", scrollHorizontally);
  }
})(); */



