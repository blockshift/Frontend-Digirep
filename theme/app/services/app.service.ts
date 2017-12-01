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

 /////////////////////////////       Sample Service . Call in component to see if it works properly ///////////////////////////////////
 
    servicemethod(){

      return 'Hi this is first message from service';
    }


////////////////////// User enrollment token  .  From Frontend username and organizationname will be passed . Dropdown menu should be created for organizationname so that user can select  . For example in dropdown only two dropdown options should be present `orga` and `orgb`
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


/////////////////////////// Enroll Degree service . From frontend , name , depart ,enrollment number , cgpa , university, token will be passed
 to this service which will call node api 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
enrolldegree(name,depart,enrollnumber,cgpa,university,token){
     console.log(depart);	
     let fcn = 'initDegree';	
     let argument = name+','+depart+','+enrollnumber+','+cgpa+','+university;
     let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer '+token});
     let options = new RequestOptions({ headers: headers });
     
     let body1 = {
             
             fcn: fcn,
             args: argument
                }
let body = JSON.stringify(body1);
     console.log("body1 logs",body1);
     console.log('server logs',body);
     return this.http.post('http://localhost:4000/channels/firstchannel/chaincodes/firstchaincode', body, options )
    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error '));

}

/////////////////////////// Get Blockchain Info : This service will fetch blockchain stats like blockheight adn current block hash.
Org token will be passed. When dashboard page loads this service will be called , so you need to figure out how to pass org token automaticaly to this service. One way of doing is to ask for org token when user log in dashboard and store that token in any global variable just like session cookie and pass in this service everytime page loads.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


getblockchaininfo(token){
    
       let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer '+token});
       let options = new RequestOptions({ headers: headers });
        
     return this.http.get('http://localhost:4000/channels/firstchannel?peer=peer1', options )
    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error '));

  }


/////////////////////////// Get Transaction detail: This service will get transactiond detail of specific transaction in public blockchain page.
Transaction id and orgtoken must be passed. When user clicks on any trnasaction , these two filed should be passed automatically .
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


getdetails(transactionid,token){
     console.log('transaction id from server',transactionid);
     let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer '+token});
     let options = new RequestOptions({ headers: headers });
        
     return this.http.get('http://localhost:4000/channels/firstchannel/transactions/'+transactionid+'?peer=peer2', options )
    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error ')); 

} 




}




