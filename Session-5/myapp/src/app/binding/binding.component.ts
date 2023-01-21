import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

products=[{name:"pencile",price:"8.3",available:"21-01-2023",ratings:4.8},
{name:"pen",price:"10",available:"25-01-2023",ratings:4.6},
{name:"eraser",price:"5.0",available:"26-01-2023",ratings:4.9},
{name:"scale",price:"4.5",available:"27-01-2023",ratings:5.0},
{name:"books",price:"11.5",available:"29-01-2023",ratings:4.5},];

name:string="NIKUNJ SONI";
url:string="http://www.google.com/";

we:number=700;


flag:boolean=false;
show(){
  this.flag=!this.flag;
}

}

