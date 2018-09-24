import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeoplesService implements OnInit {

  msg: any[] = [];
  messages: any;
  currentuser: { name: string };
  ngOnInit() {
  }

  constructor(private http: HttpClient) { }

  public allpeoples(): Observable<any> {
    return this.http.get('../../assets/peoples.json');
  }

  updatemsg(data) {
    this.messages = this.msg.push(data);
  }

}
