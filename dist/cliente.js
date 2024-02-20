"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;
require("core-js/modules/es.symbol.description.js");
function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var Cliente = (exports["default"] = /*#__PURE__*/ (function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);
    this._nombre = nombre; //tipo string

    this._impuesto = impuesto; //tipo objeto de la clase Impuesto
  }
  _createClass(Cliente, [
    {
      key: "nombre",
      get: function get() {
        return this._nombre;
      },
      set: function set(nuevo_nombre) {
        this._nombre = nuevo_nombre;
      },
    },
    {
      key: "impuesto",
      get: function get() {
        return this._impuesto;
      },
    },
    {
      key: "calcularImpuesto",
      value: function calcularImpuesto() {
        var objetoImpuesto = this.impuesto;
        if (objetoImpuesto) {
          var montoBrutoAnual = objetoImpuesto.montoBrutoAnual;
          var deducciones = objetoImpuesto.deducciones;
          var montoImpuesto = (montoBrutoAnual - deducciones) * 0.21;
          return "-----\nEl impuesto a pagar por el cliente "
            .concat(this.nombre, " es de $")
            .concat(montoImpuesto, "\n-----");
        } else {
          return "-----\nNo existe data de Impuesto para el cliente ".concat(
            this.nombre,
            "\n-----"
          );
        }
      },
    },
  ]);
  return Cliente;
})());
