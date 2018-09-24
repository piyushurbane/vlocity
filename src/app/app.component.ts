import { Component, OnInit } from '@angular/core';
import { PeoplesService } from './services/peoples.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  peoples: any[];
  speoples: any[];
  selectedpeople: any[];
  messages: any[];
  currentuser: string;
  constructor(private peoplesService: PeoplesService) {
  }

  ngOnInit() {
    this.getAllPeoples();
  }

  getAllPeoples() {
    this.peoplesService.allpeoples()
      .subscribe(data => {
        this.peoples = data.People;
        this.speoples = [...this.peoples];
        console.log(this.peoples);
        this.getSelctedperson(0);
      },
        error => { }
      );
  }

  getSelctedperson(index) {
    this.selectedpeople = this.peoples[index];
    this.messages = this.peoplesService.msg.filter(x => x.reciveuser == index);
    this.currentuser = this.speoples[index].name;

  }

  searchedUser(name) {
    console.log(this.peoples);
    const people = [...this.peoples];
    this.peoples = this.speoples.filter(x => x.name.toUpperCase().includes(name.toUpperCase()));
    this.getSelctedperson(0);
  }


}
