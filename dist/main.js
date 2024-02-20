"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuesto = _interopRequireDefault(require("./impuesto.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
/*
Caso uno diagrama UML: Creación de cliente sin impuestos
*/
var cliente1 = new _cliente["default"]("Waldo");
console.log(cliente1.calcularImpuesto());
/*
Caso dos diagrama UML: Creación de cliente con Impuesto
*/
var montoBrutoAnual_cliente2 = 1000000;
var deducciones_cliente2 = 0.1 * montoBrutoAnual_cliente2;
var impuesto = new _impuesto["default"](
  montoBrutoAnual_cliente2,
  deducciones_cliente2
);
var cliente2 = new _cliente["default"]("Daniel", impuesto);
console.log(cliente2.calcularImpuesto());
