import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientHttpService {

  constructor() { }

  fetch(url:string){
    return fetch("").then(respuesta => respuesta.json());
  }
}
