import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Journal } from './journals';
import { Issue } from './issues';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class SearchService {
  journalsUrl = 'http://im-markup-language-service-dev.aws.wiley.com:8984/getJournals';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
      //alert('aaaaa');
    this.handleError = httpErrorHandler.createHandleError('searchService');
  }

  /* GET items whose name contains search term */
  getJournals(): Observable<Journal[]> {
    return this.http.get<Journal[]>(this.journalsUrl)
      .pipe(
        catchError(this.handleError<Journal[]>('search', []))
      );
  }
  /*
  getJournals(term: string): Observable<Journal[]> {
    term = term.trim();
    const options = term ?
     { params: new HttpParams().set('doi', term) } : {};

    return this.http.get<Journal[]>(this.journalsUrl, options)
      .pipe(
        catchError(this.handleError<Journal[]>('search', []))
      );
  }  
  */

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/