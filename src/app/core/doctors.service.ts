import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { Doctor, Task } from './models';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

    constructor(private http: HttpClient) { }

    getDoctors(): Observable<Doctor[]> {
        return this.http.get<Doctor[]>(environment.ROUTES.DOCTORS_ROUTE);
    }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(environment.ROUTES.TASKS_ROUTE);
    }

    getTasksForDoctor(doctorId): Observable<Task[]> {
        return this.http.get<Task[]>(`${environment.ROUTES.SPECIFIC_DOCTOR_TASKS_ROUTE}${doctorId}/todos`);
    }
}
