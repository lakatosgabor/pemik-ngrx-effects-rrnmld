import { Injectable } from '@angular/core';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { InstructorService } from '../instructor.service';
import { Observable, of } from 'rxjs';
import { map, catchError, debounceTime } from 'rxjs/operators';

@Injectable()
export class InstructorNameValidator {
  
  constructor(private instructorService: InstructorService) {}

  instructorNameValidatorFn(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.instructorService.instructorNameExists(control.value).pipe(
        map(exists => (exists ? { instructorName: true } : null)),
        catchError(() => of(null))
      );
    };
  }
}