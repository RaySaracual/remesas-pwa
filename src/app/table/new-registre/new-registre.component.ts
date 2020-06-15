import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Remesa } from '../remesa.model';

@Component({
  selector: 'app-new-registre',
  templateUrl: './new-registre.component.html',
  styleUrls: ['./new-registre.component.scss']
})
export class NewRegistreComponent implements OnInit {

  form: FormGroup

  listPaymentType:any[] = [
    {id: 1, description: 'Tránsferencia'},
    {id: 2, description: 'Eféctivo'},
  ];


  listHomeBank: any[] = [
    {id: 1, description: 'Banco Popular'},
    {id: 2, description: 'Ban Reservas'},
    {id: 3, description: 'BHD Léon'}
  ];


  listBankToSend: any[] = [
    {id: 1, description: 'Banesco'},
    {id: 2, description: 'Banco de Venezuela'},
    {id: 3, description: 'Mercantil'}
  ];

  documentType: any[] = [
    {id: 1, description: 'Cédula'},
    {id: 2, description: 'Pasaporte'},
  ];
  dayOfTheRate=0;

  constructor(public dialogRef: MatDialogRef<NewRegistreComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Remesa) { }

  ngOnInit(){
    this.dayOfTheRate =   localStorage.getItem('dayRate') ? parseInt(localStorage.getItem('dayRate')) : 0 ; 
    this.createForm();
    if(this.data){
      this.loadDataForm()
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }

  createForm() {
    this.form = this.fb.group({

      // Origen
      id  : [],
      client  : ["", [ Validators.required, Validators.minLength(3) ]  ],
      paymentType  : [this.listPaymentType[0].id, [ Validators.required ]  ],
      paymentNumber  : ['', [ Validators.required ]  ],
      homeBank : [this.listHomeBank[0].id, [ Validators.required ]  ],
      totalReceived  : [0, [ Validators.required]  ],

     // Valores de configuracion usuario
      rateOfTheDay  : [this.dayOfTheRate, [ Validators.required ]  ],
     
     // Destino
      titleNameToSend  : [, [ Validators.required, Validators.minLength(3), Validators.maxLength(20) ]  ],
      bankToSend  : [this.listBankToSend[0].id, [ Validators.required ]  ],
      destinationAccount  : [, [ Validators.required, Validators.minLength(3) ]  ],
      numberDocument  : [, [ Validators.required, Validators.minLength(8) ]  ],
      totalToSend  : [{value:0,disabled:true},  [ Validators.required ]  ],
      // documentType  : [this.documentType[0].id, [ Validators.required, Validators.minLength(3), Validators.maxLength(20) ]  ],
  })

}


loadDataForm() {
  this.form.reset({
    id: this.data.id,
    client  :this.data.client,
    paymentType  : this.listPaymentType[this.listPaymentType.findIndex( data=>data.id === this.data.paymentType)].id ,
    paymentNumber  : this.data.paymentNumber,
    homeBank : this.listHomeBank[this.listHomeBank.findIndex( data=>data.id == this.data.homeBank)].id ,
    totalReceived  : this.data.totalReceived,

   // Valores de configuracion usuario
    rateOfTheDay  : this.dayOfTheRate,
   
   // Destino
    titleNameToSend  : this.data.titleNameToSend,
    bankToSend  : this.data.bankToSend,
    destinationAccount  : this.data.destinationAccount,
    numberDocument  : this.data.numberDocument,
    totalToSend  : this.data.totalToSend,
  });




}


calculateTotalSend(){
  let totalToSend=0;
  totalToSend = this.dayOfTheRate * parseInt(this.form.value.totalReceived);
  this.form.get('totalToSend').setValue(totalToSend);
}




}
