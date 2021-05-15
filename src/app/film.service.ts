import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private film_url=`http://localhost:3000/api/films`;
  private director_url=`http://localhost:3000/api/directors`;


  constructor(private http:HttpClient) { }

  getFilms():Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/films')
    .pipe(catchError(this.errorHandler));
  }

  getDirector(id:any):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/api/directors/${id}`)
    .pipe(catchError(this.errorHandler));
  }

  getDirectors():Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/directors')
    .pipe(catchError(this.errorHandler));
  }

  registerFilm(film: any){
    return this.http.post<any>(this.film_url,film)
  }

  registerDirector(director: any){
    return this.http.post<any>(this.director_url,director)
  }

  updateDirector(name,director:any){
    return this.http.put<any>( `http://localhost:3000/api/directors/${name}`,director)
  }

  deleteFilm(name:string){
    return this.http.delete<any>(`http://localhost:3000/api/films/${name}`)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(err : HttpErrorResponse){
    return throwError(err);
  }

}
