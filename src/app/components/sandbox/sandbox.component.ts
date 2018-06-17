import { Component } from '@angular/core';
import { Customer } from './Customer';
import { DataService } from './../../services/data.services'

@Component({
    selector:'sandbox',
    template:`
        <h1>
            Hello World
        </h1>
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
    constructor(public dataService:DataService){
        this.dataService.getUsers().subscribe(users =>{
            console.log(users);
            this.users=users;
        })
    }
}