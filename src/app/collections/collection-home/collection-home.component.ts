import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {
  
  data = [
    { name: 'James', age: 30, job: 'Designer' },
    { name: 'Jill', age: 28, job: 'Engineer' },
    { name: 'Elyse', age: 32, job: 'Engineer' }
  ];
  headers = [
    {key:'name',label: 'Name'},
    { key:'age', label: 'Age'},
    { key:'job', label: 'Job'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
