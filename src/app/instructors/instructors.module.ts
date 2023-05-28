import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorsRoutingModule } from './instructors-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromEvents from './store/instructors.reducer';

@NgModule({
  imports: [
    CommonModule, InstructorsRoutingModule, FormsModule, ReactiveFormsModule, RouterModule,
    StoreModule.forFeature(fromEvents.eventsFeatureKey, fromEvents.eventsReducer),
    EffectsModule.forFeature([EventEffects]),
     MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class InstructorsModule { }