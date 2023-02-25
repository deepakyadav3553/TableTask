import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getRecords() {
    return this.http.get('https://api.npoint.io/6587c18acf7423428ecc');
  }
  getUsers() {
    return this.http.get('https://api.npoint.io/8ce22694feda4cf015d1');
  }
}
