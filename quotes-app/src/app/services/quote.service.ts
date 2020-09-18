import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Quote } from '../models/quote';
@Injectable()

export class QuoteService {

    private publicQuotesUrl = "http://localhost:3001/api/quotes/public";
    private privateQuotesUrl = "http://localhost:3001/api/quotes/private";

    constructor(private http: HttpClient) { }

    getPublicQuotes(): Observable<Quote[]> {
        return this.http
            .get<Quote[]>(this.publicQuotesUrl)
            .pipe(
                catchError(this.handleError)
            )
    }
    
    getPrivateQuotes(): Observable<Quote[]> {
        return this.http
            .get<Quote[]>(this.privateQuotesUrl)
            .pipe(
                catchError(this.handleError)
            )
    }

    private handleError(err: HttpErrorResponse | any) {
        console.error('An error occurred', err);
        return throwError(err.message || err);
    }

}
