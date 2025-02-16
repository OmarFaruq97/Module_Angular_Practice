import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataTableComponent],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
  <app-data-table></app-data-table>
  `
})
export class AppComponent {
  title = 'InformationTable';
}
