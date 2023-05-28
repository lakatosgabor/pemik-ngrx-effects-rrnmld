import { createSelector, createFeatureSelector } from '@ngrx/store';
import { InstructorsFeatureState } from './instructors.reducer';
import { InstructorsFeatureKey } from './instructors.reducer';

export const selectFeature = createFeatureSelector<InstructorsFeatureState>(InstructorsFeatureKey);

export const selectEvents = createSelector(
  selectFeature,
  (state: InstructorsFeatureState) => {
    return state.instructors;
  }
)