import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserClass } from '../UserClass';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit{

  //inject the service
  constructor(private service:DataService){}

  users:UserClass[];

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(result=>this.users=result);
  }

}
