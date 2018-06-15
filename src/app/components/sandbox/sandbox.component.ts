import { Component } from '@angular/core';
import { Customer } from './Customer';
@Component({
    selector:'sandbox',
    template:`
        <h1>
            Hello World
        </h1>
        <form (submit)="onSubmit()">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" [(ngModel)]="name" name="name">
            </div>
            <input type="submit" class="btn btn-success" value="submit">
        </form>
        <hr>
        <ul class="list-group">
            <li class="list-group-item" *ngFor="let user of users">
                {{user}}
            </li>
        </ul>
    `
})
// For using ngModel import in app.module
export class SandboxComponent{
    name:string="";
    users:string[]=["jon doe","Marie","alex"]
    onSubmit(){
        this.users.push(this.name);
        this.name="";
    }
}