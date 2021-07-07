import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicio/api/api.service';
import {UserI} from '../../modelo/user.interface'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( private api:ApiService) { }

  id:any ="";
  name:string ="";
  email: string="";
  tel: string="";
  lastName: string="";

  ngOnInit(): void {
    this.id=localStorage.getItem("token");
    this.api.getUser(this.id).subscribe(data=>{
      let userResponse:UserI=data;
      console.log(data);
      this.name=userResponse.data.rows[0].nombre;
      this.email=userResponse.data.rows[0].email;
      this.lastName=userResponse.data.rows[0].lastName;
      this.tel=userResponse.data.rows[0].tel;
    })
    
  }

}
