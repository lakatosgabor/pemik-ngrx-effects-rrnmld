import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { InstructorService } from '../../instructor.service';
import { instructorLoadedAction, deleteInstructor } from './instructors.actions';

@Injectable()
export class InstructorEffects {

  loadMovies$;

  constructor(
    private actions$: Actions,
    private instructorService: InstructorService
  ) {
    this.loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(InstructorActionTypes.instructorsRequested),
    mergeMap(() => this.instructorService.getEvents()
      .pipe(
        map(instructors => (instructorLoadedAction({instructors}))),
        catchError(() => EMPTY)
      ))
    )
  );
  }
}