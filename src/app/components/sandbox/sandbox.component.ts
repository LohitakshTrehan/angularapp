import { Component } from '@angular/core';
import { Customer } from './Customer';
@Component({
    selector:'sandbox',
    template:`
        <h1>Hello
            <!--
            <span *ngIf="showName">{{name}}</span>
            -->
            <span *ngIf="showName;else noName">{{name}}</span>
            <ng-template #noName>Ng Template</ng-template>

            <p>Hello {{showName ? name: "world"}}</p>
            
            <hr>

            <div [ngSwitch]="greeting">
                <div *ngSwitchCase="'1'">Hello World</div>
                <div *ngSwitchCase="'2'">Hello</div>
                <div *ngSwitchCase="'3'">World</div>
                <div *ngSwitchDefault>yo</div>
            </div>
        </h1>
    `
})

export class SandboxComponent{
    name:string = 'Jon Doe';
    showName:boolean = false;
    greeting:number=5;
}