import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Http } from '@angular/http'
import { map, catchError } from 'rxjs/operators'
@Injectable()
export class DataService{
    //Observables are ES7 open streams
    //Inject dependencies in constructor


    constructor(public http:Http){

    }
    getUsers(){
        return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
            map(res => res.json()),
        );
    }
}