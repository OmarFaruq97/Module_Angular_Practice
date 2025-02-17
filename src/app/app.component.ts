import { Component } from '@angular/core';
import { DataTableComponent } from './table/data-table/data-table.component';
import { TabelArrayComponent } from './table/table-array/tabel-array.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  imports: [DataTableComponent,TabelArrayComponent,HeaderComponent,FooterComponent,ContentComponent],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
  <div class="container">
    <app-header></app-header>
    <app-content></app-content>
    <app-data-table></app-data-table>
    <app-tabel-array></app-tabel-array>
    <app-footer></app-footer>
  </div>
  `
})
export class AppComponent {
  title = 'InformationTable';
}
