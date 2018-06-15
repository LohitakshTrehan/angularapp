import { Component } from '@angular/core';
import { Customer } from './Customer';
@Component({
    selector:'sandbox',
    template:`
        <h1>
            Hello world
        </h1>
        <!-- 3 ways to bind properties -->
        <div>
            <img src="{{ imageUrl }}"> <!-- can only use strings here -->
        </div>
        <div>
            <img [src]="imageUrl"><!-- in this method we can use booleans and other stuff-->
        </div>
        <div>
            <img bind-src="imageUrl">
        </div>
        <h4>Image Location: <span [textContent]="imageUrl"></span></h4>
        <hr>
        <h2> Create Post </h2>
        <p [hidden]="isUnchanged"> post is changed, pls save it</p>
        <button [disabled]="isUnchanged">Save It</button>
    `
})

export class SandboxComponent{
    imageUrl:string = "https://picsum.photos/200/100";
    isUnchanged:boolean=false;
}