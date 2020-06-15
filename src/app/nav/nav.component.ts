import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  
  installEvent=null;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  
  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeinstallPrompt(event:Event){
    console.log(event);
  
    event.preventDefault();
  
    this.installEvent = event;
  }
  
  installByUser(){
  
    if(this.installEvent){
      this.installEvent.prompt();
      this.installEvent.userChoice
      .then(rta => {
        console.log(rta);
      });
    }
  
  }

}
