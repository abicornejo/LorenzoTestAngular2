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
var MemberDetailComponent = (function () {
    function MemberDetailComponent(_route, _router, _memberService) {
        this._route = _route;
        this._router = _router;
        this._memberService = _memberService;
        this.pageTitle = 'Member Detail';
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getMember(id);
        });
    };
    MemberDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MemberDetailComponent.prototype.getMember = function (id) {
        var _this = this;
        this._memberService.getMember(id).subscribe(function (member) { return _this.member = member; }, function (error) { return _this.errorMessage = error; });
    };
    MemberDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/members']);
    };
    MemberDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product Detail: ' + message;
    };
    return MemberDetailComponent;
}());
MemberDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/members/member-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        member_service_1.MemberService])
], MemberDetailComponent);
exports.MemberDetailComponent = MemberDetailComponent;
//# sourceMappingURL=member-detail.component.js.map