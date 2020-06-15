import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';

// import {  AngularFireModule } from '@angular/fire'
// import {  AngularFireMessagingModule } from '@angular/fire/messaging'
// import {  AngularFirestoreModule } from '@angular/fire/firestore'

import{ Routes, RouterModule  } from '@angular/router';
import { NewRegistreComponent } from './table/new-registre/new-registre.component';
import { VerifyPaymentComponent } from './verify-payment/verify-payment.component';
import { RemittancesComponent } from './remittances/remittances.component'



const appRoutes:Routes =[
  {path:'', component:DashboardComponent},
  {path:'remesas', component:RemittancesComponent},
  {path:'verificar', component:VerifyPaymentComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    TableComponent,
    NewRegistreComponent,
    VerifyPaymentComponent,
    RemittancesComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    FormsModule, 
    MatSelectModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule,
    MatChipsModule,
    RouterModule.forRoot(appRoutes),
    // AngularFireModule,
    // AngularFireMessagingModule ,
    // AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
