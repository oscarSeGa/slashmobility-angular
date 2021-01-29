import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getSongs(term?: string): Observable<any> {
    let url = `https://itunes.apple.com/search?term=oscar&entity=song`;
    if (term) {
      url = `https://itunes.apple.com/search?term=${term}&entity=song`;
    }
    return this.http.get(url).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error: any) => throwError(error)));
  }
}
