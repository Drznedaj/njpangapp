import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  loginUrl = 'api/login';

  constructor(private http: HttpClient) { }

  public loginujUsera(user: User): Observable<Object> {
    // tslint:disable-next-line:max-line-length
    this.http.post(this.loginUrl, user, {headers: new HttpHeaders({'Content-Type': 'application/json'}), observe: 'response'}).subscribe(res => console.log(res.headers.getAll('Authorization')));
    return this.http.post(this.loginUrl, user, httpOptions)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
