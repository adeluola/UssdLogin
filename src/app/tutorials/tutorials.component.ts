import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title:String="Learn to Build Your Own USSD"

  tutorials=[
    {title:"Youtube Tutorial Video 1" ,details:"A brief overview of how FlutterFlow works, and how you can use it to help build your application!",link:"#"},
    {title:"Youtube Tutorial Video 2" ,details:"A brief overview of how FlutterFlow works, and how you can use it to help build your application!",link:""},
    {title:"Youtube Tutorial Video 3" ,details:"A brief overview of how FlutterFlow works, and how you can use it to help build your application!",link:""},
    {title:"Youtube Tutorial Video 4" ,details:"A brief overview of how FlutterFlow works, and how you can use it to help build your application!",link:""}



  ]
}
