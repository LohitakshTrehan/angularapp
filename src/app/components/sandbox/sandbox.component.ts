import { Component } from '@angular/core';
import { Customer } from './Customer';
@Component({
    selector:'sandbox',
    template:`
        <h1>
            Hello world
        </h1>
        <p>My Birthday is {{birthday | date | uppercase}}</p>
        <p>My Birthday is {{birthday | date:"MM-dd-yyyy"}}</p>
        <p>I was born in {{birthday | date:"yyyy"}}</p>
        <p>I love {{'cake'|uppercase}}</p>
        <p> I hate {{'DOGS' | lowercase}}</p>
        <p>Your total is {{total | currency:"&#8377;"}}</p>
        <p>Our fee is {{fee |percent}}</p>
    `
})
//pipes in Angular
export class SandboxComponent{
    birthday = new Date(1981,1,15);
    total=500;
    fee=0.3;
}