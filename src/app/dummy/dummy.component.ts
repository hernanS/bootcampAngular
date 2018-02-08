import { Component, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor() { }
  @Input() cont;
  @Output() emmiter = new EventEmitter();
  ngOnInit() {
  }

  sumMethod(){
    this.emmiter.emit(this.cont);
  }
}
