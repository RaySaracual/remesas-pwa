import { Component, OnInit } from '@angular/core';
import { TableDataSource } from '../table/table-datasource';

@Component({
  selector: 'app-verify-payment',
  templateUrl: './verify-payment.component.html',
  styleUrls: ['./verify-payment.component.scss']
})
export class VerifyPaymentComponent implements OnInit {

  dataSource: TableDataSource;

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

folders: any[] = [
  {
    name: 'Photos',
    updated: new Date('1/1/16'),
  },
  {
    name: 'Recipes',
    updated: new Date('1/17/16'),
  },
  {
    name: 'Work',
    updated: new Date('1/28/16'),
  }
];
notes: any[] = [
  {
    name: 'Vacation Itinerary',
    updated: new Date('2/20/16'),
  },
  {
    name: 'Kitchen Remodel',
    updated: new Date('1/18/16'),
  }
];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new TableDataSource();

    console.log(this.dataSource);
  }

}
