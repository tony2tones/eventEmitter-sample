import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Emitterz';
  
  recieveMessage($event) {
   
    console.log("These goodies ", $event);
  }
}
