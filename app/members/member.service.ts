import {Injectable} from "@angular/core";
import {Request,RequestOptions, RequestMethod,
    RequestOptionsArgs,Http,Headers , Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import {IMember} from "./member"

@Injectable()
export class MemberService{

    private _memberUrl:string = 'http://private-a73e-aquentuxsociety.apiary-mock.com/members';
    private baseUrl: string = 'http://private-a73e-aquentuxsociety.apiary-mock.com/members';
    product: IMember[] = [];
    editId: number = 0;
    errorMessage: string;
    constructor(private _http:Http){

    }
    getMembers():Observable<IMember[]> {

        const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');

        return this._http.get(this._memberUrl, {headers: headers})
            .map((response:Response) => <IMember[]>response.json())
            .do(data=>console.log('All: '+JSON.stringify(data)))
            .catch(this.handleError);
    }

    getMember(id: number): Observable<IMember> {
        return this.getMembers()
            .map((members: IMember[]) => members.find(m => m.id === id));
    }


    private handleError(error:Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }





}
