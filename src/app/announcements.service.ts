import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {

  constructor(private http:HttpClient) { }

  getAnnouncements()
  {
    //let apiUrl="https://jsonplaceholder.typicode.com/posts";
    let apiUrl="";
    return this.http.get(apiUrl);
  }
}
