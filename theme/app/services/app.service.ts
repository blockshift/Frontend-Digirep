import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class AppService {
  _
  constructor(private http:Http) {
  }

 
 
    servicemethod(){

      return 'Hi this is first message from service';
    }


getEnrollmentId(userName,org) {
    console.log("username",userName);
    let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let body1 = new URLSearchParams();
    body1.set('username', userName);
    body1.set('orgName', org);
    console.log("body1 logs",body1)
    let body = body1.toString(); 
    console.log('server logs',body);
    return this.http.post('http://localhost:4000/users', body, options )
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error '));
  }

}




