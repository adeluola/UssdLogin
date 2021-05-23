import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foa',
  templateUrl: './foa.component.html',
  styleUrls: ['./foa.component.css']
})
export class FOAComponent implements OnInit {

  title: string ="Frequently Asked Questions" ;

  FQAs=[

    {title:'What can I build?',reply:"FlutterFlow let's you build many kinds of apps that talk to a simple database. You can have stateful elements and add actions to various parts of your app to create/update/delete records. You can also load data dynamically"},
    {title:'How long does it take to build an app in FlutterFlow?',reply:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {title:'Can I import an existing app into FlutterFlow?',reply:"FlutterFlow let's you build many kinds of apps that talk to a simple database."}

  ]
 
  constructor() { }

  
  ngOnInit(): void {
  }


}
