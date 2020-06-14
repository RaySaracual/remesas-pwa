import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource } from './table-datasource';
import { NewRegistreComponent } from './new-registre/new-registre.component';
import { MatDialog } from '@angular/material/dialog';
import { Remesa } from './remesa.model';

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

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
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
];

constructor(public dialog: MatDialog){}

  ngOnInit() {
    this.dataSource = new TableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  newRegistre(): void {
    const dialogRef = this.dialog.open(NewRegistreComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.parsetRemesaData(result);
    //  this.dataSource.saveData(result)
    });
  }

  parsetRemesaData(data){
    let remesa:Remesa;
     console.log(this.dataSource.data.length);

     console.log(data);
    

    remesa = {
      id: this.dataSource.data.length + 1, 
      client: data.client.value, 
      paymentType: data.paymentType.value,  // si es efectivo genera un codigo correlativo
      paymentNumber:data.paymentNumber.value,
      homeBank:data.homeBank.value,
      totalReceived:data.totalReceived.value, 
      rateOfTheDay:data.rateOfTheDay.value,
      destinationAccount: data.destinationAccount.value,
      bankToSend: data.bankToSend.value,
      totalToSend: data.totalToSend.value,
      titleNameToSend:data.titleNameToSend.value,
      numberDocument: data.numberDocument.value,
      status:1,
      }

      this.dataSource.saveData(remesa); 
      this.dataSource = new TableDataSource(); 
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;


          

    }


}
