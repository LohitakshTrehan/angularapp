import { Component } from '@angular/core';
import { Customer } from './Customer';
@Component({
    selector:'sandbox',
    template:`
        <h1>
            Hello world
        </h1>
        <div [style.font-size]="isSpecial ? 'x-large':'smaller'">Font size depends on isSpecial</div>
        <div [ngStyle]="currentStyles">This div is initialy saveable and special</div>
    `
})

export class SandboxComponent{
    isSpecial =true;
    canSave = true;
    currentStyles={};
    setCurrentStyles(){
        this.currentStyles={
            'font-style':this.canSave?'italic':'normal',
            'font-size':this.isSpecial?'24px':'12px'
        }
    }
    constructor(){
        this.setCurrentStyles();
    }
}