import { Component } from '@angular/core';
import { Customer } from './Customer';
@Component({
    selector:'sandbox',
    // template:`<h1>
    //                 {{name}} is {{age}} yrs old
    //           </h1>
    //           <h2>
    //                 his name is {{person.firstname}} {{person.lastname}}
    //           </h2>
    //           <p>{{showAge()}}</p>
    // `
    templateUrl:`./sandbox.component.html`,
    styleUrls:['./sandbox.component.css']
})

export class SandboxComponent{
    // name:string = "alabama";
    // age:number = 20;
    // person = {firstname:"Steven", lastname:"Tyler"};
    // hasChildren:boolean=true;
    // city:any = "Boston";//can be any type
    // myNumbersArray:number[] = [1,2,3];
    // myStringsarray:string[] =["helo","world"];
    // myAnyArray:any[] = [1,2,"Hello"];
    // myTuple:[string, number]=["hello",3];
    // unusable:void =undefined;
    // u:undefined = undefined;
    // n:null=null;
    // s:null=undefined;
    // constructor(){
    //     console.log("running constructor");
    //     //can directly initialise variable here,
    //     //without even adding the property
    //     //this.age=23;
    //     this.hasBirthday();
    // }
    // hasBirthday(){
    //     this.age+=1;
    // }
    // showAge(){
    //     return this.age;
    // }
    // customer:Customer;
    // customers:Customer[];
    // constructor(){
    //     this.customer = {
    //         id:1,
    //         name:"John Doe",
    //         email:"a@b.com"
    //     }
    //     this.customers=[
    //         {
    //             id:1,
    //             name:"John Doe",
    //             email:"a@b.com"
    //         },
    //         {
    //             id:2,
    //             name:"Steven",
    //             email:"b@c.com"
    //         },
    //         {
    //             id:1,
    //             name:"Jimmy",
    //             email:"c@d.com"
    //         } 
    //     ]
    // }
}