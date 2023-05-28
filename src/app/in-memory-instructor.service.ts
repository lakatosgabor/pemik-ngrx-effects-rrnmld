import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { InstructorTable } from './instructor-list/instructors';

@Injectable()
export class InMemoryInstructorService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const db = {
      events: InstructorTable.instructors
    }
    return db;
  }

}