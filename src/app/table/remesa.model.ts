export interface Remesa {

  // origen
    id: number;
    client: string;
    paymentType: number;
    paymentNumber: string; // si es efectivo autogenerar E00001..002..N
    homeBank: number;
    totalReceived: number;

    // Valores de configuracion usuario
    rateOfTheDay: number;

    // Destino
    destinationAccount: string;
    bankToSend:number;
    totalToSend: number;
    titleNameToSend: string;
    numberDocument:number
    status: number;

    // // Auditoria
    // operador: string;
    // fecha: string;
  }