import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from '../crud-http.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  todoList:any=[];
  constructor(private crudHttpService: CrudHttpService){}

  ngOnInit(): void {
     this.listTodos();
  }

  listTodos(){
    this.crudHttpService.list().subscribe((response)=>{
      this.todoList = response;
    },(error=>{

    }));
  }

  createTodo(){
    let todo = {
      id: new Date().getTime(),
      product:`Food Item` ,
      category:`category` ,
      price:`100` ,
      available:`yes` ,

    }
    this.crudHttpService.create(todo).subscribe((response)=>{
      this.listTodos();
    },(error=>{

    }));
  }

  editTodo(todo: any){
    let data = {
      id: new Date().getTime(),
      product:`Food Item` ,
      category:`category` ,
      price:`100` ,
      available:`yes` ,
    }
    this.crudHttpService.update(todo.id,data).subscribe((response)=>{
      this.listTodos();
    },(error=>{

    }));
  }

  deleteTodo(id: any){
    this.crudHttpService.delete(id).subscribe((response)=>{
      this.listTodos();
    },(error=>{
    }));
  }
}
