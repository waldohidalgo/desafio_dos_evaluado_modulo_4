import Cliente from "./cliente.mjs";
import Impuesto from "./impuesto.mjs";

/*
Caso uno diagrama UML: Creación de cliente sin impuestos
*/
const cliente1 = new Cliente("Waldo");
console.log(cliente1.calcularImpuesto());
/*
Caso dos diagrama UML: Creación de cliente con Impuesto
*/
const montoBrutoAnual_cliente2 = 1000000;
const deducciones_cliente2 = 0.1 * montoBrutoAnual_cliente2;
const impuesto = new Impuesto(montoBrutoAnual_cliente2, deducciones_cliente2);
const cliente2 = new Cliente("Daniel", impuesto);
console.log(cliente2.calcularImpuesto());
