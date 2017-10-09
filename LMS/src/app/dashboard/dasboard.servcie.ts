import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Dash} from './dash';

@Injectable()
export class DasboardService {
    // Url to API
    private postUrl = 'https://jsonplaceholder.typicode.com/posts';

    // Injecting the http client into the service
    constructor(private http: Http) {}

    getDashs (): Observable<Dash[]> {
        return this.http.get(this.postUrl)
            .map(this.parseData)
            .catch(this.handleError);
    }

    private parseData(res: Response)  {
        const body = res.json();

        if (body instanceof Array) {
            return body || [];
        }

        else return body.post || {};
    }

    // Prases error based on the format
    private handleError(error: Response | any) {
        let errorMessage: string;

        errorMessage = error.message ? error.message : error.toString();

        // In real world application, call to log error to remote server
        // logError(error);

        return Observable.throw(errorMessage);
    }
}