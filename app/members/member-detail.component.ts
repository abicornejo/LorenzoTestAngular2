import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IMember } from './member';
import { MemberService } from './member.service';

@Component({
    templateUrl: 'app/members/member-detail.component.html'
})
export class MemberDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Member Detail';
    member: IMember;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _memberService: MemberService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getMember(id);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getMember(id: number) {
        this._memberService.getMember(id).subscribe(
            member => this.member = member,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/members']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}
