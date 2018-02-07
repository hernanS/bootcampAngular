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
  changeStatus(){
    this.status = !this.status;
  }
}
