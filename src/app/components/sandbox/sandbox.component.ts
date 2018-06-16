import { Component } from '@angular/core';
import { Customer } from './Customer';
import { DataService } from './../../services/data.services'
@Component({
    selector:'sandbox',
    template:`
        <h1>
            Hello World
        </h1>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let user of users">
                {{user}}
            </li>
        </ul>
    `
})
// For using ngModel import in app.module
export class SandboxComponent{
    //inject dependencies in constructor parameter
    users:string[];
    constructor(public dataService:DataService){
        console.log(this.dataService.getUsers());
        this.users=this.dataService.getUsers();
    }
}