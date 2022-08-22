import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import * as data from '../data.json';

@Injectable({
  providedIn: 'root'
})
export class TimeItemsService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('assets/data.json')
  }
}
