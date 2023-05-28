import { Injectable } from '@angular/core';
import { InstructorTable } from './instructor-list/instructors';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { HttpHeaders } from '@angular/common/http';
import { map, debounceTime } from 'rxjs/operators';

const INSTRUCTOR_URL = 'api/instructors';

@Injectable()
export class InstructorService {

  constructor(private requestService: RequestService) { }

  getInstructors(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.requestService.get<any>(INSTRUCTOR_URL, httpOptions);
  }

  getInstructor(instructorId): Observable<any>{
    return this.requestService.get(`${INSTRUCTOR_URL}/${instructorId}`);
  }

  createInstructor(instructor: any): Observable<any> {
    return this.requestService.post(`${INSTRUCTOR_URL}/`, instructor);
  }

  updateInstructor(instructor: any): Observable<any> {
    return this.requestService.put(`${INSTRUCTOR_URL}/`, instructor);
  }

  deleteInstructor(instructorId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const url = `${INSTRUCTOR_URL}/${instructorId}`;
    return this.requestService.delete(url, httpOptions);
  }

  instructorNameExists(name: string): Observable<boolean> {
    return this.getInstructors().pipe(
      map(instructors => {
        return instructors.findIndex(instructor => instructor.name === name) !== -1;
      })
    );
  }
}