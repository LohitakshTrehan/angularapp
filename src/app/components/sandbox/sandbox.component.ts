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
            <li class="list-group-item" *ngFor="let d of data">
                {{d}}
            </li>
        </ul>
    `
})
// For using ngModel import in app.module
export class SandboxComponent{
    data:any[]=[];
    //inject dependencies in constructor parameter
    constructor(public dataService:DataService){
        this.dataService.getData().subscribe(data => {
            console.log(data);
            this.data.push(data);
        })
    }
}