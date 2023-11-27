import { Injectable } from '@angular/core';
import { Animal } from '../Animal'
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from '../Contato';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animais'
  constructor(private http: HttpClient) { }

  remove(id:number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  getAll():Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id:number):Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }

  setItem(animal: Animal):Observable<Animal> {
    return this.http.post<Animal>(this.apiUrl,animal);
  }

  setContato(contato: Contato):Observable<Contato>{
    return this.http.post<Contato>(this.apiUrl,contato);
  }

}
