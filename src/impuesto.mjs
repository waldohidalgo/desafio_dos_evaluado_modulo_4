class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual; //tipo number
    this._deducciones = deducciones; //tipo number
  }
  get montoBrutoAnual() {
    return this._montoBrutoAnual;
  }
  set montoBrutoAnual(nuevoMontoBrutoAnual) {
    this._montoBrutoAnual = nuevoMontoBrutoAnual;
  }
  get deducciones() {
    return this._deducciones;
  }
  set deducciones(nuevoDeducciones) {
    this._deducciones = nuevoDeducciones;
  }
}
export default Impuesto;
