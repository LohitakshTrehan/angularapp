import { Component } from '@angular/core';
import { Customer } from './Customer';
@Component({
    selector:'sandbox',
    template:`
        <h1>
            Hello World
        </h1>
        <button (click)="changeValue()">change value</button>
        <h1>{{text}}</h1>
    `
})
// pipes in Angular
export class SandboxComponent{
    b:boolean=false;
    text:string="Hello World";
    changeValue(){
        this.text="Goodbye World";
    }
}