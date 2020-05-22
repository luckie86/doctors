import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

    constructor(private http: HttpClient) { }

    getDoctors() {
        return this.http.get(environment.ROUTES.DOCTORS_ROUTE);
    }

    getTasks() {
        return this.http.get(environment.ROUTES.TASKS_ROUTE);
    }

    getTasksForDoctor(doctorId) {
        return this.http.get(`${environment.ROUTES.SPECIFIC_DOCTOR_TASKS_ROUTE}${doctorId}/todos`);
    }
}
