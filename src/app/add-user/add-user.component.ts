import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{
  userForm!: FormGroup;
  userId!: string;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router,
  private route: ActivatedRoute) {
    this.userId = this.route.snapshot.params["id"] || "";
    console.log(this.userId);
    if (this.userId) {
      this.getUserDetail();
    }
  }
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = this.formBuilder.group({
      userName: ["", Validators.required],
      email:["", Validators.required]
    })
  }
  onSubmit() {
    console.log("called");
    
    const formValue = this.userForm.getRawValue();
    console.log("forValue", formValue);
    
    const body: UserModel = {
      email: formValue.email || "",
      userName: formValue.userName || ""
    }
    if (this.userId) {
      this.userService.updateUser(this.userId, body).subscribe((response) => {
        if (response) {
          console.log("updated", response);
          
        }
      })
    } else {
      this.userService.postUserData(body).subscribe((response) => {
        console.log("response", response);
        if (response) {
          this.router.navigate(["/users"])
        }
        
      }, (error) => {
        console.log("error",error);
        
      })
      
    }

    
  }

  getUserDetail() {
    this.userService.getUserDetail(this.userId.toString()).subscribe((response) => {
      if (response) {
        const responseData = response;
        this.userForm.setValue({
          userName: responseData.userName || "",
          email: responseData.email || ""
        })
      }
    })
  }

}
