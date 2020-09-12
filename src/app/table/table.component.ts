import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource } from './table-datasource';
import { NewRegistreComponent } from './new-registre/new-registre.component';
import { MatDialog } from '@angular/material/dialog';
import { Remesa } from './remesa.model';
import { HomeBank, BankToSend, PaymentType, Status } from './enum';
import { RecordShipmentsComponent } from '../record-shipments/record-shipments.component';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Remesa>;
  dataSource: TableDataSource;

  @Input() typeView: number;
  @Input() displayedColumns: number;
  editRowData: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource = new TableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  newRegistre() {
    const dialogRef = this.dialog.open(NewRegistreComponent, {
      width: '600px',
      data: this.editRowData
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.editRowData = ''

      if (!result) {
        return;
      }

      const remesa = this.parsetRemesaData(result);
      
      if(!result.id.value){
      this.dataSource.saveData(remesa);
      }

      if(result.id.value){
        this.dataSource.updateData(remesa);
        }

      this.dataSource = new TableDataSource();
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }

  editRow(row) {
    this.editRowData = row;
    this.newRegistre()
  }

 

  parsetRemesaData(data) {
    let remesa: Remesa;
    let id= this.dataSource.data.length + 1

    if(data.id.value){
      id = data.id.value;
    }

    return remesa = {
      id: id ,
      client: data.client.value,
      paymentType: data.paymentType.value,  // si es efectivo genera un codigo correlativo
      paymentNumber: data.paymentNumber.value,
      homeBank: data.homeBank.value,
      totalReceived: data.totalReceived.value,
      rateOfTheDay: data.rateOfTheDay.value,
      destinationAccount: data.destinationAccount.value,
      bankToSend: data.bankToSend.value,
      totalToSend: data.totalToSend.value,
      titleNameToSend: data.titleNameToSend.value,
      numberDocument: data.numberDocument.value,
      status: 1,
    }

  }




  getHomeBank(data) {
    return HomeBank[data];
  }

  getBankToSend(data) {
    return BankToSend[data];
  }

  getPaymentType(data) {
    return PaymentType[data];
  }

  getStatus(data) {
    return Status[data];
  }

  verifyPayment(row: Remesa) {

    let info = [row]

    let update = info.map((data) => {
      data.status = 2
      return data;
    })

    this.dataSource.updateData(update[0]);
    this.dataSource = new TableDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  sendForObservation(row) {
    let info = [row]
    let update = info.map((data) => {
      data.status = 3
      return data;
    })
    this.dataSource.updateData(update[0]);
    this.dataSource = new TableDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;

  }


  registerTransfer(row) {
    console.log(row);
    let info = [row]
    let update = info.map((data) => {
      data.status = 4
      return data;
    })
    this.dataSource.updateData(update[0]);
    this.dataSource = new TableDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    
      }

  




}
