import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Speed } from './speed';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
   
    // private headers = new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   });
    
    private speed_url: string = "http://localhost/speed_test_pro/speed.php";
    private addspeed_url: string = "http://localhost/speed_test_pro/addspeed.php";
    private show_url: string = "http://localhost/speed_test_pro/show.php";
    private deletespeed_url: string = "http://localhost/speed_test_pro/speeddel.php?id";

    constructor(private http: HttpClient) {}

    public getInternetSpeed(): Observable<Speed[]>{
        return this.http.get<Speed[]>(this.speed_url);
    }

    public getAddSpeed(data: any){
        return this.http.post(this.addspeed_url, data);
    }

    public getAll(): Observable<Speed[]>{
        return this.http.get<Speed[]>(this.show_url);
    }

    public deleteSpeed(id: any){
        return this.http.delete(`${this.deletespeed_url}/${id}`);
    }
}

