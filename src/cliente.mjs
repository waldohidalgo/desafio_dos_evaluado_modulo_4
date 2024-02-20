export default class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre; //tipo string

    this._impuesto = impuesto; //tipo objeto de la clase Impuesto
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevo_nombre) {
    this._nombre = nuevo_nombre;
  }

  get impuesto() {
    return this._impuesto;
  }

  calcularImpuesto() {
    const objetoImpuesto = this.impuesto;
    if (objetoImpuesto) {
      const montoBrutoAnual = objetoImpuesto.montoBrutoAnual;
      const deducciones = objetoImpuesto.deducciones;
      const montoImpuesto = (montoBrutoAnual - deducciones) * 0.21;
      return `-----\nEl impuesto a pagar por el cliente ${this.nombre} es de $${montoImpuesto}\n-----`;
    } else {
      return `-----\nNo existe data de Impuesto para el cliente ${this.nombre}\n-----`;
    }
  }
}
