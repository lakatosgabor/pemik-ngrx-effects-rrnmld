import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<mat-card>
    <h2>Hello {{name}}!</h2>
    <nav>
      <ul>
        <li><a mat-button routerLink="/events">
            <b>Tantárgyak</b>
          </a></li>
          <li><a mat-button routerLink="/instructors">
          <b>Oktatók</b>
        </a></li>
      </ul>
    </nav>
  </mat-card>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
