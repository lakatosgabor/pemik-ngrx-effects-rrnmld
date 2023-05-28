import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EventsFeatureState } from './events.reducer';
import { eventsFeatureKey } from './events.reducer';

export const selectFeature = createFeatureSelector<EventsFeatureState>(eventsFeatureKey);

export const selectEvents = createSelector(
  selectFeature,
  (state: EventsFeatureState) => {
    return state.events;
  }
)