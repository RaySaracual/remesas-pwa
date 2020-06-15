import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-payment',
  templateUrl: './verify-payment.component.html',
  styleUrls: ['./verify-payment.component.scss']
})
export class VerifyPaymentComponent implements OnInit {

  displayedColumns = [
    'id',
    'client',
    'paymentType',
    'paymentNumber',
    'homeBank',
    'totalReceived',
    'rateOfTheDay',
    'status',
    'options',
];

  constructor() { }

  ngOnInit(): void {
  }

}
