import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Telephone } from '../model/telephone';

@Injectable({
  providedIn: 'root'
})
export class TelephoneService {

  constructor(private httpClient : HttpClient) { }





  deleteTele(id: number): Observable<any>{
    return this.httpClient.delete(`http://localhost:8080/deleteTele/${id}`)
  }


  update(data: Telephone){
    return this.httpClient.put<Telephone>("http://localhost:8080/updatephone",data)
  }

  addPhone(data: Telephone): Observable<any>{
    return this.httpClient.post<Telephone>("http://localhost:8080/AddPhone",data)
  }

  getphones(): Observable<any>{
    return this.httpClient.get("http://localhost:8080/t")
  }

  getall(): Observable<any>{
    return this.httpClient.get("http://localhost:8080/telephones")
  }
  getcirclechart(){
    return this.httpClient.get("http://localhost:8080/circlephone");
  }
}

