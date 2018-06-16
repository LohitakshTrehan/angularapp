import { Injectable } from '@angular/core';

@Injectable()
export class DataService{
    users:string[];
    constructor(){
        this.users = ['Mark','Shanon','Beth','John'];
    }
    getUsers(){
        return this.users;
    }
}