import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import {MatTableDataSource} from "@angular/material/table";

import { Speed } from './speed';

// interface SPEEDS {
//   id: Number;
//   speed: Number;
//   date_time: Number;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'internet-speed-test';
  result : any;
  li:any;
  speed: Speed[] =[];
  
  
  //speedList: Speed[] = [];
  // public displayedColumns = ['id','speed','date_time'];
  // public dataSource = new MatTableDataSource<SPEEDS>();

  
  constructor(private apiService : ApiService) {
    //console.log(this.speed);
   }

  public speedtest = {};
   ngOnInit() {
    this.apiService.getInternetSpeed().subscribe(data => this.speedtest = data);
  }

   public getInternetSpeed():any{
    
     this.result = this.speedtest;
     console.log(this.speedtest);
     console.log(JSON.stringify(this.result));
     let s = JSON.stringify(this.result.data);
     
     
     
   }
  
   
   public getAddSpeed(response:any){
    
      const body = {
        status : response.status,
        data : response.data
      }
      this.apiService.getAddSpeed(body).subscribe(response => {
        console.log(response);
      })
     
    }


  public getAll() {
    this.apiService.getAll().subscribe(res => {
      console.log(res); 
      this.li = res;
      this.speed=this.li.list;
      let e = this.li.data;
      console.log(this.li);
      
    })
  }

  public deleteSpeed(s:any){
    this.li.data.splice(s,1);
    this.apiService.deleteSpeed(s).subscribe(response => {
      console.log(response);
    })
  }

}