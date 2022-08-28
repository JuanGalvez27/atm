export class ATM {

  constructor (saldo) {
    this._saldo = saldo;
  }

  //metodos

  retirarDinero (retiro){ 
    return this._saldo = this._saldo - retiro;
  }

  deposito(valor){
    this._saldo = this._saldo + valor;
  }

  
  saldoActual(){
    return this._saldo;
  }

  //getters

  get saldo(){  
    return this._saldo
  }
}

