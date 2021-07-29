import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to learn Pipes';
  todaydate?:Date;

  products?:any[]; //array
  p:any={};// objects

  searchText?:any;

  ngOnInit()
  {
    this.todaydate=new Date();
    this.products=[
      {id:1,pname:"Pen",price:20},
      {id:2,pname:"Pencil",price:25},
      {id:3,pname:"Paper",price:15},
      {id:4,pname:"Bag",price:200},
      {id:1,pname:"Ball",price:250}


    ];
  }
}
