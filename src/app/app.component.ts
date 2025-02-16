import { Component } from '@angular/core';
import { DataTableComponent } from './table/data-table/data-table.component';
import { TabelArrayComponent } from './table/table-array/tabel-array.component';

@Component({
  selector: 'app-root',
  imports: [DataTableComponent,TabelArrayComponent],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
  <app-data-table></app-data-table>
  <app-tabel-array></app-tabel-array>
  `
})
export class AppComponent {
  title = 'InformationTable';
}
