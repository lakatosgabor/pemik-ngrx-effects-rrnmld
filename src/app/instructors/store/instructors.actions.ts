import { createAction, props } from '@ngrx/store';
import { Instructor } from './instructors.model';

export enum InstructorActionTypes {
  instructorsRequested = '[Instructors] Instructors Requested',
  instructorsLoaded = '[Instructors] Instructors Loaded'
}

export const nstructorsRequestedAction = createAction(
  InstructorActionTypes.instructorsRequested
);
export const eventsLoadedAction = createAction(
  InstructorActionTypes.instructorsLoaded,
  props<{instructors: Instructor[]}>()
);

export const deleteInstructor = createAction(
  '[Instructors] Delete Instructor',
  props<{instructorId}>()
);