import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Remesas';


  installEvent=null;

  
@HostListener('window:beforeinstallprompt', ['$event'])
onBeforeinstallPrompt(event:Event){
  console.log(event);

  event.preventDefault();

  this.installEvent = event;
}

installByUser(){

  if( this.installEvent){

    this.installEvent.prompt();
    this.installEvent.userChoice
    .then( rta => {

      console.log(rta);
    });
  }

}


}
