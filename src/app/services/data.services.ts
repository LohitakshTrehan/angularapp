import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable()
export class DataService{
    //Observables are ES7 open streams
    data:Observable<Array<number>>;

    constructor(){

    }

    getData(){
        this.data = new Observable(observer =>{
            setTimeout(() =>{
                observer.next([1]);
            },1000);
            setTimeout(() =>{
                observer.next(2);
            },2000);
            setTimeout(() =>{
                observer.next("Hello");
            },3000);
            setTimeout(() =>{
                observer.complete();
            },4000);
        });
        return this.data; 
    }
}