import {Component, OnInit} from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import {IMember} from './member'
import {MemberService} from "./member.service";
@Component(
    {
        moduleId:module.id,
        templateUrl:'member-list.component.html',
        styleUrls:['member-list.component.css']
    })

export class MemberListComponent implements OnInit{
    pageTitle:string='UX Society Members';
    listFilter:string;
    errorMessage:string;
    members:IMember[];
    _firstName : string='';
    _portrait : string='';
    _occupation : string='';
    _company : string='';
    _motto : string='';


    selectedRow : number;
    constructor(private _route: ActivatedRoute,
                private _router: Router,private _memberService: MemberService){

    }
    ngOnInit():void{
        this._memberService.getMembers()
            .subscribe(members=>this.members=members,
                error=>this.errorMessage=<any>error);

    }
    viewMember(fn:string, por:string,occ:string,com:string,mot:string):void{
        this._firstName =fn;
        this._portrait=por;
        this._occupation=occ;
        this._company=com;
        this._motto=mot;
        //this._router.navigate(['/member/'+id]);
    }
    setClickedRow(index:number):void{
        this.selectedRow = index;
    }
    onRatingClicked(message:string):void{
        this.pageTitle='Member List'+message;
    }
}