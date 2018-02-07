import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My application';
  author = 'StevenSanz';
  count = 0;
  imageSource = './../favicon.ico';
  status = false;
  imageUrl;
  imagePath = "https://static.pexels.com/photos/34950/pexels-photo.jpg";
  baseUrl: 'https://api.adorable.io/avatars/500/';
  urlSuffix: '@adorable.io.png';
  
  generateRandomFace(num) {
    this.imageUrl = `${this.baseUrl}${num}${this.urlSuffix}`;
  }
  constructor(){
    setInterval(function(){
      let num = Math.random();
      let o = this.generateRandomFace(num);
    }, 1000);
  }

 
}
