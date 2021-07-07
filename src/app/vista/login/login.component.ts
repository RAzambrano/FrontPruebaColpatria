import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ApiService} from '../../servicio/api/api.service';
import {LoginI} from '../../modelo/login.interface';
import {ResponseI} from '../../modelo/reponse.interface';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    name : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor( private api:ApiService,private router:Router ) { }
  errorStatus:boolean = false;
  errorMsj:any = "";
  id:any ="";

  ngOnInit(): void {
  }

  onLogin(form:LoginI){
    
    this.api.login(form).subscribe(data=>{
    
     
      let dataResponse:ResponseI=data;
      
      if(dataResponse.state == true){
        this.id =dataResponse.data.rows[0].id;
         
          localStorage.setItem("token",this.id);
          this.router.navigate(['dashboard']);
                    
      }else{
      //  console.log(dataResponse.message);
        this.errorStatus = true;
        this.errorMsj = dataResponse.message;
        
      }
    })
  }

}
