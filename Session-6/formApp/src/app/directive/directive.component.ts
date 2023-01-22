import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
    
  }
  products=[{"name":"Nikunj Soni","email":"nikunj@gmail.com"},
  {"name":"alex","email":"alex@gmail.com"},
  {"name":"c jhon","email":"cjhon@gmail.com"},
  {"name":"S.Rogaleo","email":"sr@gmail.com"},

]
//used for ng if
flag=false;
show(){
  this.flag=!this.flag;
}

//used for switch case
public day=new Date().getDay();
}
