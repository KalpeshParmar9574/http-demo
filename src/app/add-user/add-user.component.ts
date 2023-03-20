import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
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
