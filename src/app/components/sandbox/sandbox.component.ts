import { Component } from '@angular/core';
import { Customer } from './Customer';
@Component({
    selector:'sandbox',
    template:`
        <h1>Hello World</h1>
        {{people}}
        <ul>
            <li *ngFor="let person of people">
                {{person}}
            </li>
        </ul>
        <ul>
            <li *ngFor="let person of people, let i = index">
                {{i+1}} {{person}}
            </li>
        </ul>
        <ul>
            <li *ngFor="let person of people2">
                {{person.firstName}} {{person.lastName}}
            </li>
        </ul>
    `
})

export class SandboxComponent{
    people=['Rick','Daryl','Carl','Glen'];
    people2 = [
        {
            firstName:"Rick",
            lastName:"Grime"
        },
        {
            firstName:"Daryl",
            lastName:"Dixon"
        },
        {
            firstName:"Steven",
            lastName:"Smith"
        },
        {
            firstName:"Gwenn",
            lastName:"Tenyson"
        },
    ]
    constructor(){
        this.people[2]='Carol';
    }
}