import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //declare formgroup variable
  registerForm:FormGroup;

  //inject the dependency to create validators
  constructor(private builder:FormBuilder){}

  ngOnInit():void{
    this.registerForm=this.builder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",[Validators.email,Validators.required]],
      password:["",[Validators.required,Validators.minLength(8)]]
    });

  }

///when user click on submit button -method will be called
submitted:boolean=false;

OnSubmit(){
  this.submitted=true;
  if(this.registerForm.invalid)
      return;
  else
    alert("Form Submitted Successfully");
}

//to access the form control in a view to dispaly error
get f(){
  return this.registerForm.controls;
}


}
