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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var MemberService = (function () {
    function MemberService(_http) {
        this._http = _http;
        this._memberUrl = 'http://private-a73e-aquentuxsociety.apiary-mock.com/members';
        this.baseUrl = 'http://private-a73e-aquentuxsociety.apiary-mock.com/members';
        this.product = [];
        this.editId = 0;
    }
    MemberService.prototype.getMembers = function () {
        var headers = new http_1.Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
        return this._http.get(this._memberUrl, { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    MemberService.prototype.getMember = function (id) {
        return this.getMembers()
            .map(function (members) { return members.find(function (m) { return m.id === id; }); });
    };
    MemberService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return MemberService;
}());
MemberService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MemberService);
exports.MemberService = MemberService;
//# sourceMappingURL=member.service.js.map