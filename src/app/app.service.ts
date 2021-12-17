import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CarService {

    constructor(private http: HttpClient) { }

    predictCarPrice(data): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
            'Access-Control-Allow-Origin':'*'
            })
            };
        return this.http.post(environment.CARSERVICE + 'predict', data,httpOptions);
    }
}
