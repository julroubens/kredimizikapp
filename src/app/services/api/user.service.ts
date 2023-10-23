import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})


/* [
  {
    "id": 0,
    "title": "string",
    "artist": "string",
    "releaseDate": "2023-08-21",
    "img": "string",
    "status": true,
    "album": 0,
    "category": 0,
    "intity": [
      0
    ],
    "instrument": [
      0
    ]
  }
] */

export class UserService {

  constructor(private http: HttpClient) { }
  
  getSongs(callback: (response: Response) => void, errCallback: (response: Response) => void){
    return this.http.get(
      `${environment.baseUrl}songs`
    ).subscribe(
      (response:any) => {
        response.forEach((e:any) => {
          this.http.get<any[]>(
            `${environment.baseUrl}albums/${e.album}`
          ).subscribe(
            (res) =>{
              e.album = res;
            }
          )

          this.http.get<any[]>(
            `${environment.baseUrl}categorys/${e.category}`
          ).subscribe(
            (res) =>{
              e.category = res;
            }
          )
        });
        callback(response);
    },
    (err) => {
      console.log(err);
      errCallback(err);
    });



  }

  getSongById(songID:number, callback: (response: Response) => void, errCallback: (response: Response) => void){
    console.log("Call - getSongById - ID", songID);
    return this.http.get(
      `${environment.baseUrl}songs/${songID}`
    ).subscribe(
      (response:any) => {
        this.http.get<any[]>(
          `${environment.baseUrl}albums/${response.album}`
        ).subscribe(
          (res) =>{
            response.album = res;
          }
        )

        this.http.get<any[]>(
          `${environment.baseUrl}categorys/${response.category}`
        ).subscribe(
          (res) =>{
            response.category = res;
          }
        )
        this.http.get<any[]>(
          `${environment.baseUrl}instruments/${response.instrument}`
        ).subscribe(
          (res) =>{
            response.instruments = res;
          }
        )
        this.http.get<any[]>(
          `${environment.baseUrl}entitys/${response.intity}`
        ).subscribe(
          (res) =>{
            response.intitys = res;
          }
        )
        console.log("getSongById",response);
        callback(response);
    },
    (err) => {
      console.log(err);
      errCallback(err);
    });
  }

}
