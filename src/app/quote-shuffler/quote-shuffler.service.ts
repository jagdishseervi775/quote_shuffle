import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteShufflerService {

  api_url:string = 'https://api.quotable.io/random';

  constructor(
    private _httpClient: HttpClient,
  ) {
   }

   quoteShuffle(){
    return new Promise((resovle, reject) => {
      this._httpClient.get(this.api_url, {
        headers : new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).subscribe((response:any) => {
        resovle(response)
      }, reject)
    })
   }
}
