import { Component } from '@angular/core';
import { Customer } from './Customer';
@Component({
    selector:'sandbox',
    template:`
        <h1>
            Hello world
        </h1>
        <button id="btn" (click)="fireEvent($event,'Hello')">Click Event</button>
    `
})
//pipes in Angular
export class SandboxComponent{
    fireEvent(e,greeting){
        console.log(greeting);
        //console.log("button clicked");
        console.log(e.target.id);
        //mouse events like click,mouseover,mousedown,mouseup
        //dblclick,drag,dragover
    }
}