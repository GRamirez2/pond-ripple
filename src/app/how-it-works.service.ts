import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable, throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HowItWorksService {

  constructor(
    private http: HttpClient
  ) {}

  private handleError(err: HttpErrorResponse){
    return throwError(err.message || "API Server ERROR");
  }

  fetchData():Observable<any>{
    return this.http
      .get('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

}
