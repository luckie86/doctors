import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';


const routes: Routes = [
  { path: 'doctors', component: DoctorsComponent},
  { path: '**', redirectTo: 'doctors' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
