import { Component } from '@angular/core';
import { DataTableComponent } from './data-table/data-table.component';

@Component({
  selector: 'app-root',
  imports: [DataTableComponent],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
  <app-data-table></app-data-table>
  `
})
export class AppComponent {
  title = 'InformationTable';
}
