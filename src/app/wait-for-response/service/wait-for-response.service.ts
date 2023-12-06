import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WaitForResponseService {

  constructor(private http: HttpClient) { }

  END_POINTS: any = {
    API1: 'https://api.publicapis.org/entries',
    API2: 'https://catfact.ninja/fact',
    API3: 'https://api.coindesk.com/v1/bpi/currentprice.json',
  }

  API1(): any {
    return this.http.get(this.END_POINTS.API1); 
  }
  API2(): any {
    return this.http.get(this.END_POINTS.API2); 
  }
  API3(): any {
    return this.http.get(this.END_POINTS.API3); 
  }
}
