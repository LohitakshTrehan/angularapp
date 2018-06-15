import { Component } from '@angular/core';
import { Customer } from './Customer';
@Component({
    selector:'sandbox',
    template:`
        <h1>
            Hello World
        </h1>
        <input type="text" (keyup)="fireEvent($event)">
        <hr>
        <div>{{text}}</div>
    `
})
// pipes in Angular
export class SandboxComponent{
    text:string="";
    fireEvent(e){
        console.log(e.type);
        this.text = e.target.value;
    }
    // keydown, focus, blur, cut, copy, paste
}