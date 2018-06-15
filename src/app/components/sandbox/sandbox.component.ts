import { Component } from '@angular/core';
import { Customer } from './Customer';
@Component({
    selector:'sandbox',
    template:`
        <h1>
            Hello world
        </h1>
        <h4 [class.special]="isSpecial">This class binding is special</h4>
        <h4 [ngClass]="currentClasses">This div is initially special and saveable</h4>
        <!-- ngClass used to set multiple classes -->
    `,
    styles : [
        `
            .special{
                color:red;
            }
            .saveable{
                text-transform : uppercase;
            }
        `
    ]
})

export class SandboxComponent{
    isSpecial:boolean = true;
    canSave:boolean=true;
    currentClasses={};
    setCurrentClasses(){
        this.currentClasses={
            saveable: this.canSave,
            special:this.isSpecial,
        }
    }
    constructor(){
        this.setCurrentClasses();
    }
}