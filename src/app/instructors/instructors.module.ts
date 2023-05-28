import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorsRoutingModule } from './instructors-routing.module';

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