import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EvaluacionRestPath } from './evaluacion-rest.path';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { InsEvaluacionRequest, GetEvaluacionRequest, UpdEvaluacionRequest, GetListEvaluacionRequest } from '../models/request/evaluacion.request';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionRestService {

  evaluacionesAPI: string;

  constructor(
    private http: HttpClient
  ) { 
    this.evaluacionesAPI = environment.evaluacionesAPI;
  }

  getEvaluacion(request : GetEvaluacionRequest){
    return this.http.post(`${this.evaluacionesAPI}${EvaluacionRestPath.GetEvaluacion}`, request)
      .pipe(map((response: any) => {
        return response;
      }, )) as Observable<any>;
  }
  
  getListEvaluacion(request : GetListEvaluacionRequest){
    return this.http.post(`${this.evaluacionesAPI}${EvaluacionRestPath.GetListEvaluacion}`, request)
      .pipe(map((response: any) => {
        return response;
      }, )) as Observable<any>;
  }
  
  insEvaluacion(request : InsEvaluacionRequest){
    return this.http.post(`${this.evaluacionesAPI}${EvaluacionRestPath.InsEvaluacion}`, request)
      .pipe(map((response: any) => {
        return response;
      }, )) as Observable<any>;
  }
  
  updEvaluacion(request : UpdEvaluacionRequest){
    return this.http.post(`${this.evaluacionesAPI}${EvaluacionRestPath.UpdEvaluacion}`, request)
      .pipe(map((response: any) => {
        return response;
      }, )) as Observable<any>;
  }
}
