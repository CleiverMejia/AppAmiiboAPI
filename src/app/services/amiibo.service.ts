import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {

  constructor(private http: HttpClient) { }

  getAllAmiibo() {
    return this.http.get(environment.URL_API);
  }

  getAmiiboName(name: string) {
    return this.http.get(`${environment.URL_API + environment.name}=${name}`)
  }
}
