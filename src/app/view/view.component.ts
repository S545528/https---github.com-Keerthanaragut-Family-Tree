import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  // loginFormData: FormGroup;
  // emailId=null;
  // password=null;
  // retUrl:any="auth";

  // constructor(private formBuilder: FormBuilder,private router: Router,private myService:MyServiceService,private activatedRoute: ActivatedRoute) {
  //   this.loginFormData = this.formBuilder.group({

  //     emailId: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
      
  // }); 
  //  }
  //  onClickSubmit(){
  //   //console.log(this.registerFormData.value);
  //    this.myService.loginapi(this.loginFormData.value).subscribe((response) => {
  //     swal.fire({
  //       icon: 'success',
  //       title: 'User Login Successful.',
  //       showConfirmButton: false,
  //       timer: 1500
  //     })
  //    console.log(" === addData  ===");
  //    console.log(response);
  //  }, error => {
  //   swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: 'Something went wrong!',
  //   })
  //   });
    
  
  //   this.loginFormData.reset();
  //   }
  }

 

 

