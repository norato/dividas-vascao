import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Divida } from './divida.interface';

@Injectable({
  providedIn: 'root',
})
export class DividaService {
  constructor(private httpClient: HttpClient) {}

  getDividas(): Observable<Divida[]> {
    return this.httpClient.get<Divida[]>(environment.dividaUrl);
  }
}
