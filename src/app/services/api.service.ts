import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { Song } from '../models/song.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  public getSongs(term: string): Observable<any> {
    return this.http.get(`https://itunes.apple.com/search?term=${term}&entity=song`).pipe(
      map((res: HttpResponse<any>) => res),
      catchError((error: any) => throwError(error)));
  }
}
