"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var member_service_1 = require("./member.service");
var MemberListComponent = (function () {
    function MemberListComponent(_route, _router, _memberService) {
        this._route = _route;
        this._router = _router;
        this._memberService = _memberService;
        this.pageTitle = 'UX Society Members';
        this._firstName = '';
        this._portrait = '';
        this._occupation = '';
        this._company = '';
        this._motto = '';
    }
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._memberService.getMembers()
            .subscribe(function (members) { return _this.members = members; }, function (error) { return _this.errorMessage = error; });
    };
    MemberListComponent.prototype.viewMember = function (fn, por, occ, com, mot) {
        this._firstName = fn;
        this._portrait = por;
        this._occupation = occ;
        this._company = com;
        this._motto = mot;
        //this._router.navigate(['/member/'+id]);
    };
    MemberListComponent.prototype.setClickedRow = function (index) {
        this.selectedRow = index;
    };
    MemberListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Member List' + message;
    };
    return MemberListComponent;
}());
MemberListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'member-list.component.html',
        styleUrls: ['member-list.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router, member_service_1.MemberService])
], MemberListComponent);
exports.MemberListComponent = MemberListComponent;
//# sourceMappingURL=member-list.component.js.map