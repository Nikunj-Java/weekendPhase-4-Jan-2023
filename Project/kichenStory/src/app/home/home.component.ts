import { Component } from '@angular/core';
import { CrudHttpService } from '../crud-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  todoList:any=[];
  constructor(private crudHttpService: CrudHttpService,private router:Router){}

  ngOnInit(): void {
     this.listTodos();
  }

  listTodos(){
    this.crudHttpService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{

    }));
  }

  btnClick= ()=>{
    this.router.navigate(['payment']);
    //this.router.navigate(['home']);
  }

}
