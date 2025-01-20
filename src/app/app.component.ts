import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs';
import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NewCmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todaydate;
  componentproperty;
  constructor(private myservice:MyserviceService) { 
    this.todaydate = this.myservice.showTodayDate();
    this.componentproperty = this.myservice.serviceproperty;
   }

  title = 'ng-pipes-demo';
  presentDate = new Date();
  time$ = interval(1000).pipe(
    map( () => new Date())
  )
  testObject = { 
    name: "Ces",
    age: 21,
    food: "cheesecake"
  };
  price : number = 20000;
  Fruits = ["Apple", "Orance", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  decNum1: number =8.12345678;
  decNum2: number =5.12;
}
