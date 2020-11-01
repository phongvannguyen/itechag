import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { GetComponent } from './get/get.component';

const routes: Routes = [
  {
    path: 'student/create',
    component: AddComponent
  },
  {
    path: 'student',
    component: GetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }