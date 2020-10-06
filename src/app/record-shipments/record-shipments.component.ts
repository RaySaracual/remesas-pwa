import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-record-shipments',
  templateUrl: './record-shipments.component.html',
  styleUrls: ['./record-shipments.component.scss']
})
export class RecordShipmentsComponent implements OnInit {
  form: FormGroup

  constructor(public dialogRef: MatDialogRef<RecordShipmentsComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }


  createForm() {
    this.form = this.fb.group({

      // Origen
      client  : ["", [ Validators.required, Validators.minLength(3) ]  ],
      paymentNumber  : ['', [ Validators.required ]  ],
      totalReceived  : [0, [ Validators.required]  ],

     // Destino
      titleNameToSend  : [, [ Validators.required, Validators.minLength(3), Validators.maxLength(20) ]  ],
      destinationAccount  : [, [ Validators.required, Validators.minLength(3) ]  ],
      numberDocument  : [, [ Validators.required, Validators.minLength(8) ]  ],
      totalToSend  : [{value:0,disabled:true},  [ Validators.required ]  ],
      // documentType  : [this.documentType[0].id, [ Validators.required, Validators.minLength(3), Validators.maxLength(20) ]  ],
  })

}


}
