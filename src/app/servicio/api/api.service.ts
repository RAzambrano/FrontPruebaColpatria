import { Injectable } from '@angular/core';
import {LoginI} from '../../modelo/login.interface';
import {ResponseI} from '../../modelo/reponse.interface';
import {HttpClient} from '@angular/common/http'
import { from, Observable } from 'rxjs';
import {UserI} from '../../modelo/user.interface'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "/api"
  constructor(private http:HttpClient) { }
  
  login(form:LoginI):Observable<ResponseI>{
    let direccion = this.url+"/security/login";
    //const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    

    return this.http.post<ResponseI>(direccion,form);
    //return this.http.get<ResponseI>(direccion);
  }
  
  getUser(id:number):Observable<UserI>{
    let direccion = this.url+"/usuario/find?id="+id;
    //const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        return this.http.get<UserI>(direccion);
    //return this.http.get<ResponseI>(direccion);
  }



}
