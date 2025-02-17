import { Component } from '@angular/core';
import { TabelArrayComponent } from '../../table/table-array/tabel-array.component';

@Component({
  selector: 'app-home',
  imports: [TabelArrayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  output = '';
  onSubmit() {
    let input = document.getElementById('input') as HTMLTextAreaElement;
    this.output = input.value;
  }
}
