import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remittances',
  templateUrl: './remittances.component.html',
  styleUrls: ['./remittances.component.scss']
})
export class RemittancesComponent implements OnInit {

  displayedColumns = [
        'id',
        'client',
        'paymentType',
        'paymentNumber',
        'homeBank',
        'totalReceived',
        'rateOfTheDay',
        'destinationAccount',
        'bankToSend',
        'totalToSend',
        'titleNameToSend',
        'numberDocument',
        'status',
        'options',
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
