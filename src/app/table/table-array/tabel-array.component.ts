import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-tabel-array',
  imports: [CommonModule],
  templateUrl: './tabel-array.component.html',
  styleUrl: './tabel-array.component.css'
})
export class TabelArrayComponent {

  playerArray: any[] =[
    {name: "Messi", club: "Miami", country:"Argentina"},
    {name: "Ronaldo", club: "Al-naser", country:"Portugal"},
    {name: "Neymar", club: "Santos FC", country:"Brazil"}
  ]
}
