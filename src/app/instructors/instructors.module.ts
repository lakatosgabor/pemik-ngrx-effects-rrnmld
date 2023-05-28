import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';

import { HighlightDirective } from '../directives/highlight.directive';
import { FirstLetterPipe } from '../pipes/first-letter.pipe';

import { InstructorsRoutingModule } from './instructors-routing.module';
import { InstructorsComponent } from './instructors.component';
import { InstructorListComponent } from '../instructor-list/instructor-list.component';
import { InstructorSocialComponent } from '../instructor-social/instructor-social.component';
import { InstructorDetailsComponent } from '../instructor-details/instructor-details.component';
import { InstructorService } from '../instructor.service';
import { InstructorCreateComponent } from '../instructor-create/instructor-create.component';
import { InstructorNameValidator } from '../validators/instructor-name.validator';
import * as fromEvents from './store/instructors.reducer';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { InstructorEffects } from './store/instructors.effects';

@NgModule({
  imports: [
    CommonModule, InstructorsRoutingModule, FormsModule, ReactiveFormsModule, RouterModule,
    StoreModule.forFeature(fromEvents.instructorsFeatureKey, fromEvents.instructorsReducer),
    EffectsModule.forFeature([InstructorEffects]),
     MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    InstructorListComponent, InstructorSocialComponent,
    InstructorDetailsComponent, InstructorCreateComponent,
    InstructorsComponent, HighlightDirective, FirstLetterPipe
  ],
  providers: [
    InstructorService, InstructorNameValidator
  ]
})
export class InstructorsModule { }