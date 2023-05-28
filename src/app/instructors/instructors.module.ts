import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorsRoutingModule } from './instructors-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromInstructors from './store/instructors.reducer';
import { EffectsModule } from '@ngrx/effects';
import { InstructorEffects } from './store/instructor.effects';

@NgModule({
  imports: [
    CommonModule, InstructorsRoutingModule, FormsModule, ReactiveFormsModule, RouterModule,
    StoreModule.forFeature(fromInstructors.instructorsFeatureKey, fromInstructors.instructorsReducer),
    EffectsModule.forFeature([InstructorEffects]),
     MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class InstructorsModule { }