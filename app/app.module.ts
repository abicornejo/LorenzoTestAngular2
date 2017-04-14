import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent} from './home/welcome.component'


import { MemberListComponent }  from './members/member-list.component';
import { MemberDetailGuard }  from './members/member-guard.service';
import { MemberDetailComponent }  from './members/member-detail.component';
import { MemberFilterPipe }  from './members/member-filter.pipe'

//FormsModule to use ngModels
@NgModule({
  imports: [ BrowserModule,FormsModule, HttpModule,
    RouterModule.forRoot([
        {path:'members',component:MemberListComponent},
        {path:'member/:id', canActivate:[MemberDetailGuard], component:MemberDetailComponent},
        {path:'welcome',component:WelcomeComponent},
        {path:'',redirectTo:'welcome',pathMatch:'full'}
    ])],
  declarations: [ AppComponent,WelcomeComponent,MemberListComponent,MemberDetailComponent,MemberFilterPipe,
       ],
  providers:[MemberDetailGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
