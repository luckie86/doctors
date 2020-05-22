import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../core/doctors.service';
import { Doctor, Task } from "../core/models";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  doctors: Doctor[];
  selectedDoctor: Doctor;
  tasks: Task[];

  constructor(private doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.doctorsService.getDoctors().subscribe((fetchedDoctors: Doctor[]) => {
      this.doctors = fetchedDoctors;
    });
  }

  openDetails(doctorId) {
    this.selectedDoctor = this.doctors.find((doctor: Doctor) => doctor.id === doctorId);
    this.tasks = null;
  }

  showTasks(selectedDoctor) {
    this.doctorsService.getTasksForDoctor(selectedDoctor.id).subscribe((fetchedDoctorsTasks: Task[]) => {
    this.tasks = fetchedDoctorsTasks;
    console.log(fetchedDoctorsTasks);    
    });
  }

}
