import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})

export class UserComponent{
    firstName = "JJ John";
    lastName = "Smith";
    age = 20;

    constructor(){
        console.log(this.age);
        this.hasBirthday();
        console.log(this.age);
    }

    hasBirthday(){
        this.age+=1;
    }
}