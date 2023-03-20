import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "users",
    pathMatch:'full'
  },
  {
    path: "users",
    component:UsersComponent
  },
  {
    path: "add-user",
    component:AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
