import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';


import {Observable, observable, from} from "rxjs";
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';
import { throwError} from 'rxjs'
import {catchError} from 'rxjs/operators'
//import 'rxjs/add/operator/toPromise'
//import { catchError , tap , map} from'rxjs/Operators'


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs
  public currentBlog
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs'
  public authToken='Admin';

  constructor(private _http:HttpClient) {
    console.log("blog-http servic was called")
   }

  /*private handleError(err: HttpErrorResponse){
    console.log("handle error http calls")
    console.log(err.message)
    return observable.throw(err.message)
  }
*/

  public getAllBlogs():any {
    let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.authToken)
    console.log(myResponse)
    return myResponse
  }
  
  
  public getSingleBlogInformation(currentBlogId):any{
    let myResponse=this._http.get(this.baseUrl+'/view'+'/'+currentBlogId+'?authToken='+this.authToken)
    return myResponse
  }
   
}
