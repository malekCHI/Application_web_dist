import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  events:any;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  deleteEvent(idEvent : any){
    this.eventService.deleteevent(idEvent).subscribe(() => this.getEvents())
    location.reload();
    }
    public getEvents():void{
      this.eventService.getevnet().subscribe(  
        (response : Event[]) =>{
          this.events=response
        },(error :HttpErrorResponse)=>{
          alert(error.message);
        });
    }

}
