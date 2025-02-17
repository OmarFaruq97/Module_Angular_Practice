import { Component } from '@angular/core';
import { DataTableComponent } from './table/data-table/data-table.component';
import { TabelArrayComponent } from './table/table-array/tabel-array.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [DataTableComponent, TabelArrayComponent, RouterOutlet, HeaderComponent, FooterComponent,NavbarComponent],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  // template: `
  // <app-data-table></app-data-table>
  // <app-tabel-array></app-tabel-array>

  // `
  template:
  `
  // <h1>Hello {{ title }}</h1>
  // <img [src]="imgSrc" [alt]="altImg" />
  // <button (mouseover)="showAlert()">Click me</button>
  // <input (click)="onKeyUp($event)" placeholder="Write here" />
  // <p>{{ keyPressed }}</p>  
  <p>---------------------------------------------</p>
  <textarea name="input" id="input"></textarea>
  <button (click)=onSubmit()>save!</button>
  <p>{{ output }}</p>
  `
})
export class AppComponent {
  title = 'AnGuLaR';
  altImg ='';
  imgsrc='';
  keyPressed= 'Hello'

  output = '';
  onSubmit() {
    let input = document.getElementById('input') as HTMLTextAreaElement;
    this.output = input.value;
  }
}


