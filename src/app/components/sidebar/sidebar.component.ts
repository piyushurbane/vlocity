import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input('peoples') peoples;
  @Output() getSelctedperson = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  getUserRecord(index) {
    // console.log(index);
    this.getSelctedperson.emit(index);
  }

}
