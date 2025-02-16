import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table',
  imports: [],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
[x: string]: any;
  data = [
    {      
      name: 'omar faruq',
      age:   28,
      city:  'dhaka',
      country:'bangladesh',
      image:  '',
    },
    {
      name: 'iqramul',
      age:   27,
      city:  'narayanganj',
      country:'bangladesh',
      image:  '',
    },
    {
      name: 'ab siddiki',
      age:   29,
      city:  'tangail',
      country:'bangladesh',
      image:  '',
    },
    {
      name: 'Faysal Ahmed',
      age:   59,
      city:  'Demra',
      country:'Bangladesh',
      image:  '',
    },
  ]
}
