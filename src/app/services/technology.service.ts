import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class TechnologyService {

  constructor(private http: HttpClient) {
  }

  public getTechnologies(): Observable<any> {
    return this.http.get(`${ environment.apiBaseUrl }/api/v1/technologies`);

  }

}
