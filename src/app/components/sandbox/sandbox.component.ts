import { Component } from '@angular/core';
import { Customer } from './Customer';
import { DataService } from './../../services/data.services'

@Component({
    selector:'sandbox',
    template:`
        <h1>
            Hello World
        </h1>
        <form (submit)="onSubmit(isEdit)">
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
                <button class="btn btn-primary btn-sm" (click)="onEditClick(user)">Edit</button>
                <button class="btn btn-danger btn-sm" (click)="onDeleteClick(user.id)">Delete</button>
                <br><br>
            </div>
        </div>
    `
})
// For using ngModel import in app.module
export class SandboxComponent{
    //inject dependencies in constructor parameter
    users:any[];
    user={name:"",email:"",phone:""};
    isEdit:boolean=false;
    constructor(public dataService:DataService){
        this.dataService.getUsers().subscribe(users =>{
            console.log(users);
            this.users=users;
        })
    }
    onSubmit(isEdit){
        if(isEdit){
            this.dataService.updateUser(this.user).subscribe(user => {
                for(let i =0; i< this.users.length;i++){
                    if(this.users[i].id == user.id){
                        this.users.splice(i,1);
                    }
                }
                this.users.unshift(this.user);
            })
        }else{
            this.dataService.addUser(this.user).subscribe(user => {
                console.log("got response back as: ")
                console.log(user);
                this.users.unshift(user);//adds item at array begining
            })
        }
    }
    onDeleteClick(id){
        console.log(id);
        this.dataService.deleteUser(id).subscribe(res =>{
            console.log(res);
            for(let i=0;i<this.users.length;i++){
                if(this.users[i].id == id){
                    this.users.splice(i,1);
                }
            }
        })
    }
    onEditClick(user){
        this.isEdit=true;
        this.user=user;
    }
}