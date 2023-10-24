import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.css']
})
export class TopContentComponent implements OnInit {

  imagePath='../assets/images/innerpage/about-us.jpg';
  events :any;

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
          console.log(response)
        },(error :HttpErrorResponse)=>{
          alert(error.message);
        });
    }

}
