import { createReducer, on, Action } from '@ngrx/store';

import { eventsLoadedAction, deleteEvent } from './instructors.actions';
import { Event } from './instructors.model';

export const instructorsFeatureKey = 'instructors';

export interface InstructorsFeatureState {
  instructors: Instructor[];
}

export const initialState: InstructorsFeatureState = {
  instructors: []
};

export const instructorsReducer = createReducer(
  initialState,
  on(eventsLoadedAction, (state, {events}) => ({...state, events})),
  on(deleteInstructor, (state, { instructorId }) => {
    return {
      instructors: state.instructors.filter(evt => ins.id !== instructorId)
    }
  })
)