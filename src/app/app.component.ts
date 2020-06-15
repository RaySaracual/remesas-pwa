import { Component, OnInit } from '@angular/core';
import { SwUpdate} from '@angular/service-worker'
// import { AngularFireMessaging } from '@angular/fire/messaging';
// import {  AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'


interface Token {
  token: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Remesas';

  // private tokenCollection: AngularFirestoreCollection<Token>

constructor( private swUpdate: SwUpdate, 
            //  private messaging: AngularFireMessaging,
            //  private database: AngularFirestore
              ){

                // this.tokenCollection =this.database.collection<Token>('tokens');




              }


ngOnInit(){

  this.updatePWA();
  // this.requestPermission();
  // this.listenNotifications();

}

updatePWA(){

  this.swUpdate.available
  .subscribe(value=>{
    console.log('update',value);
    window.location.reload();
  })
}

// requestPermission(){

//   this.messaging.requestToken
//   .subscribe(token =>{
//     console.log(token)

//     this.tokenCollection.add({token});
//   })

// }


// listenNotifications(){

//   this.messaging.messages
//   .subscribe(msg =>{
//     console.log(msg);

//   })
// }


}
