import { Component, OnInit, Input } from '@angular/core';
import { PeoplesService } from '../../services/peoples.service';
declare var jQuery: any;


@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {

  @Input('selectedpeople') selectedpeople;
  @Input('smessages') smessages;
  @Input('allpeople') allpeople;
  messages: any[];

  constructor(private peoplesService: PeoplesService) { }

  ngOnInit() {
  }

  sendmsg(user, msg) {
    const selectedIndex = user.selectedOptions[0].value;
    const data = {
      currentuser: this.selectedpeople.name,
      reciveuser: selectedIndex,
      message: msg
    };
    this.peoplesService.updatemsg(data);
    jQuery('#myModal').modal('hide');
  }
}
