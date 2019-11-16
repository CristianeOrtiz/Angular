import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {

  public title:string
  public evento:string
  public image:string

  constructor() { }

  ngOnInit() {
    this.title = 'Próximos Eventos:';
    this.evento = 'Feriado';
    this.image = 'assets/forest.jpg';
  }

  infoHandler():void{
    alert('Informações de eventos');
  }

}
