import { Component } from '@angular/core';
import {MemberService} from "./members/member.service";
@Component({
    selector: 'pm-app',
    template:`
        <div>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <a class="navbar-brand">{{pageTitle}}</a>
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['/welcome']">Home</a></li>                       
                         <li><a [routerLink]="['/members']">Member List</a></li>
                    </ul>
                </div>
            </nav>
            <div class="container-fluid">
            <router-outlet>            
            </router-outlet>
            </div>
</div>`
    ,providers:[MemberService]
})
export class AppComponent {
    pageTitle:string ='Test with Angular 2'
 }
