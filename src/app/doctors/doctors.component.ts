import { Component, OnInit, OnDestroy } from '@angular/core';
import { DoctorsService } from '../core/doctors.service';
import { Doctor, Task } from "../core/models";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit, OnDestroy {

  doctors: Doctor[];
  selectedDoctor: Doctor;
  tasksForSelectedDoctor: Task[];
  subscriptions: Subscription[] = [];

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.doctorsService.getDoctors().subscribe((fetchedDoctors: Doctor[]) => {
      this.doctors = fetchedDoctors;
    }));
  }

  openDetails(doctorId): void {
    this.selectedDoctor = this.doctors.find((doctor: Doctor) => doctor.id === doctorId);
    this.tasksForSelectedDoctor = null;
  }

  showTasks(selectedDoctor): void {
    this.subscriptions.push(this.doctorsService.getTasksForDoctor(selectedDoctor.id).subscribe((fetchedDoctorsTasks: Task[]) => {
    this.tasksForSelectedDoctor = fetchedDoctorsTasks;
    }));
  }
  
  ngOnDestroy(): void {
    if(this.subscriptions.length) {
      this.subscriptions.forEach((subscription) => {
        subscription.unsubscribe();
      });
    }
  }

}
