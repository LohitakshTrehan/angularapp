import { Component } from '@angular/core';
import { Customer } from './Customer';
import { DataService } from './../../services/data.services'

@Component({
    selector:'sandbox',
    template:`
        <h1>
            Hello World
        </h1>
        <form (submit)="onSubmit()">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" [(ngModel)]="user.name" name="name">
                <input type="text" class="form-control" [(ngModel)]="user.email" name="email">
                <input type="text" class="form-control" [(ngModel)]="user.phone" name="phone">
                <input type="submit" class="btn btn-success" value="Submit">
                </div>
        </form>
        <hr>
        <div *ngFor="let user of users">
            <div class="well">
                <ul class="list-group">
                    <li class="list-group-item">
                        Name: {{user.name}}
                    </li>
                    <li class="list-group-item">
                        Email: {{user.email}}
                    </li>
                    <li class="list-group-item">
                        Phone: {{user.phone}}
                    </li>
                </ul>
                <br>
            </div>
        </div>
    `
})
// For using ngModel import in app.module
export class SandboxComponent{
    //inject dependencies in constructor parameter
    users:any[];
    user={name:"",email:"",phone:""};
    constructor(public dataService:DataService){
        this.dataService.getUsers().subscribe(users =>{
            console.log(users);
            this.users=users;
        })
    }
    onSubmit(){
        this.dataService.addUser(this.user).subscribe(user => {
            console.log("got response back as: ")
            console.log(user);
            this.users.unshift(user);//adds item at array begining
        })
    }
}