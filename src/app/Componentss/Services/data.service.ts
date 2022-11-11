import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Element } from 'src/app/models/elements';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _url = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getData(): Observable<Element[]> {
    return this.http.get<Element[]>(this._url);
  }

  showDataSer() {
    const request = new HttpRequest(
      'GET',
      `https://periodic-table-elements-info.herokuapp.com/elements`,
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }
}
