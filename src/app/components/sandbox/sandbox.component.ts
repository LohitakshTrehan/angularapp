import { Component } from '@angular/core';
import { Customer } from './Customer';
@Component({
    selector:'sandbox',
    template:`
        <h1>
            Hello World
        </h1>
        <input type="text" (keyup)="fireEvent($event)">
    `
})
// pipes in Angular
export class SandboxComponent{
    fireEvent(e){
        console.log(e.type);
    }
    // keydown, focus, blur, cut, copy, paste
}