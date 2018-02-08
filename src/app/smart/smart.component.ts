import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

  constructor() { }
  cont = 0;
  counter = 0;
  ngOnInit() {
  }
  calculate(number){
    this.counter += number;
  }
}
