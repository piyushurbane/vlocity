import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PeoplesService } from '../../services/peoples.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() searchedUser = new EventEmitter<any>();

  @Input('currentuser') currentuser;

  constructor(private peoplesService: PeoplesService) { }

  ngOnInit() {
  }

  searchuser(name) {
    this.searchedUser.emit(name);
  }
}
