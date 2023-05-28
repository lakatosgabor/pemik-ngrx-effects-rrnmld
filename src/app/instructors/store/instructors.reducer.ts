import { createReducer, on, Action } from '@ngrx/store';

import { instructorLoadedAction, deleteInstructor } from './instructors.actions';
import { Instructor } from './instructors.model';

export const instructorsFeatureKey = 'instructors';

export interface InstructorsFeatureState {
  instructors: Instructor[];
}

export const initialState: InstructorsFeatureState = {
  instructors: []
};

export const instructorsReducer = createReducer(
  initialState,
  on(instructorLoadedAction, (state, {instructors}) => ({...state, instructors})),
  on(deleteInstructor, (state, { instructorId }) => {
    return {
      instructors: state.instructors.filter(inst => inst.id !== instructorId)
    }
  })
)