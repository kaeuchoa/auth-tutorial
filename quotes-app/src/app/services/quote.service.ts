import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote';
@Injectable({
    providedIn: 'root'
})

export class QuoteService {
    getPublicQuotes(): Observable<Quote[]> {
        throw new Error('Method not implemented.');
    }

    constructor() { }
}
