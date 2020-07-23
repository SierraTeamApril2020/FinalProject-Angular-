
import { HttpClientService, User } from './../service/http-client.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provide-feedback',
  templateUrl: './provide-feedback.component.html',
  styleUrls: ['./provide-feedback.component.css']
})
export class ProvideFeedbackComponent implements OnInit {

  users: User[]= [];
  
  p: number = 1;
  count:number =5;

  //pager: any ={};
  //pagedItems: any[]=[];

  constructor(private httpService: HttpClientService) { }

  ngOnInit() {
    this.httpService.getUsers().subscribe(
      response => { this.users = response; }
    )
  }

  

  /* setPage(page: number) {
    // get pager object from service
    this.pager = this.httpService.getPager(this.users.length, page);

    // get current page of items
    this.pagedItems = this.users.slice(this.pager.startIndex, this.pager.endIndex + 1);
    //this.pagedItems = this.users.slice(this.pager.startIndex, this.pager.pageSize);
  }  */

  onProvideFeedbackClick(user){
    console.log("Provide Feedback button clicked.");
    alert("Provide Feedback Button Clicked..!  For "+user.id+" "+user.firstname);
  }

}
