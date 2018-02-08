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
  num;
  constructor(){
    setInterval( () =>{
      this.num = Math.floor(Math.random() + 1);
      this.generateRandomFace(this.num);
    }, 1000);
  }

  generateRandomFace(num) {
    console.log('jjj', num);
    
    this.imageUrl = `${this.baseUrl}${num}${this.urlSuffix}`;
  }
 
}
