import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  getQuote(){
    return this._http.get('https://type.fit/api/quotes');
  }

  getJokes(){
    return this._http.get('https://v2.jokeapi.dev/joke/Any?safe-mode');
  }


  getListOfPublicApis(){
    return this._http.get('https://api.publicapis.org/random');
  }

  getRandomDogImg(){
    return this._http.get('https://random.dog/woof.json');
  }

  getRandomTask(){
    return this._http.get('http://www.boredapi.com/api/activity/');
  }

  getUniversity(){
    return this._http.get('http://universities.hipolabs.com/search?country=India');
  }
}
