

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ENDPOINT} from '../../../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RESTService {

  constructor(private http: HttpClient) { }
  getAll<T>(collection: string): Observable<T[]> {
    return this.http.get<Request<T>>(ENDPOINT + '/' + collection + '/getAll',
      {
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
        responseType: 'json'
      }).pipe(map((req) => {
        return req.payload as T[]
      }));
  }
  getBy<T>(collection: string, find_by: any, order_by: any): Observable<T[]> {
    const findBy64 = btoa(JSON.stringify(find_by));
    const orderBy64 = btoa(JSON.stringify(order_by));
    return this.http.get<Request<T>>(ENDPOINT + '/' + collection + '/getBy',
      {
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
        params: new HttpParams()
          .append('findBy', findBy64)
          .append('orderBy',orderBy64),
        responseType: 'json'
      }
      ).pipe(map((req) => {
        return req.payload as T[];
    }));
  }
  getOne<T>(collection: string, id: string): Observable<T> {
    return this.http.get<Request<T>>(ENDPOINT + '/' + collection + '/getById',
      {
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
        params: new HttpParams().append('id', id),
        responseType: 'json'
      }
      ).pipe(map((req) => {
        return req.payload as T;
    }));
  }
  post<T>(collection: string, object: any): Observable<T> {
    const toPost = {payload: object};
    return this.http.post<Request<T>>(ENDPOINT + '/' + collection, toPost,
      {
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
        responseType: 'json'
      }).pipe(map((req) => {
      return req.payload as T;
    }));
  }
  update<T>(collection: string, id: string, updatedObject: any): Observable<T> {
    const toPost = {payload: updatedObject};
    return this.http.put<Request<T>>(ENDPOINT + '/' + collection, toPost,
      {
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
        params: new HttpParams().append('id', id),
        responseType: 'json'
      }
      ).pipe(map((req) => {
      return req.payload as T;
    }));
  }
  delete<T>(collection: string, id: string): Observable<T> {
    return this.http.delete<Request<any>>(ENDPOINT + '/' + collection,
      {
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
        params: new HttpParams().append('id', id),
        responseType: 'json'
      }
    ).pipe(map((req) => req.payload as T));
  }

}

export interface Request<T> {
  payload: T[] | T;
}
