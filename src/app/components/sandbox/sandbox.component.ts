import { Component } from '@angular/core';
import { Customer } from './Customer';
@Component({
    selector:'sandbox',
    template:`
        <h1>
            Hello World
        </h1>
        <form novalidate #f="ngForm" (ngSubmit)="onSubmit(f)">
            <div class="form-group">
                <label>Name</label>
                <input
                    type="text" 
                    class="form-control" 
                    [(ngModel)]="user.name" 
                    name="name"
                    #userName="ngModel"
                    minlength="2"
                    required
                >
                <div *ngIf="userName.hasError('required') && userName.touched" class="alert alert-danger">Name is Required</div>
                <div *ngIf="userName.hasError('minlength') && userName.touched" class="alert alert-danger">Atleast make 2 characters</div>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input
                    type="text" 
                    class="form-control" 
                    [(ngModel)]="user.email" 
                    name="email"
                    #userEmail="ngModel"
                    required
                >
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input
                    type="number" 
                    class="form-control" 
                    [(ngModel)]="user.phone" 
                    name="phone"
                    #usePhone="ngModel"
                    minlength="10"
                    required
                >
            </div>
            <input type="submit" class="btn btn-success" value="Submit">
        </form>
    `
})
// For using ngModel import in app.module
export class SandboxComponent{
    user = {
        name:"",
        email:"",
        phone:""
    }
    onSubmit({value, valid}){
        if(valid){
            console.log(value);
        }
        else{
            console.log("form is invalid");
        }
    }
}