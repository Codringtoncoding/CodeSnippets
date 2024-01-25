// Load the SheetJS library
import * as XLSX from "xlsx";

// Create a new workbook
const workbook = XLSX.utils.book_new();

// Create a new worksheet
const worksheet = XLSX.utils.aoa_to_sheet([
  ["PUERTO ANCONA S.A."],
  ["PEDIDO INTERNO DE PRODUCCION Nro. : E00000008828/01"],
  ["RAZON SOCIAL", "MISTRAL IMPORTADORA LTDA", "CLIENTE", "X0007"],
  ["DOMICILIO CLIENTE", "RUA JAMIL JOAO ZARIF, 684 UNID", "FECHA", "02/01/23"],
  ["CIUDAD", "SAO PAULO", "P.O.", "0201/23}"],
  ["PAIS", "BRASIL", "L.PRECIO", "064"],
  ["FORMA DE PAGO", "120 DIAS", "MONEDA", "DOLARES ESTADOUNID"],
  ["INTERMEDIARIO", "EXPORTACION"],
  ["DESTINATARIO", "RUA JAMIL JOAO ZARIF 684", "F.CARGA", "13/02/23"],
  ["PAIS DE ENTREGA", "BRASIL", "DEP.VTA.", "VEX"],
  [
    "OBSERVACIONES",
    "1x40 ARMAR 18 PALLETS",
    'La factura debe decir "Mercad',
    "",
  ],
  [
    "",
    ' oria destinada a Revenda" Luego de cda vino con + de 14alc hay que',
    ' poner: "VINHO TIPICO E TRADICIONAL DA REGIAO"  La contraetiqueta de',
    "",
  ],
  ["", ' be decir "Näo Contem Glutem"', "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  [
    "CANTIDAD",
    "CODIGO",
    "DESCRIPCION",
    "DEP",
    "%Desc",
    "PR Unit Bruto",
    "PR Unit Neto",
    "TOTAL BRUTO",
    "TOTAL NETO",
  ],
  [
    "1232",
    "1203-21-885",
    "ALMA NEGRA M BLEND 21 12X75 CL",
    "008",
    "0.00",
    "64.80",
    "64.80",
    "79833.60",
    "79833.60",
  ],
  ["", "", "C.BARRA S/DEF.", "C.BARRA S/DEF.", "", "", "", "", ""],
  ["", "TOTAL BRUTO", "", "", "", "", "", "79833.60", ""],
  ["", "TOTAL NETO", "", "", "", "", "", "79833.60", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["Descuento efectivo", "", "", "", "", "", "", "", "0.00"],
  ["", "", "", "", "", "", "", "", ""],
  ["", ""],
]);
