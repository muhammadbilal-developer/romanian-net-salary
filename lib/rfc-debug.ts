import { generateRfc } from "./rfcEngine";

const EQUIVALENCIAS: Record<string, string> = {
  A: "11",
  B: "12",
  C: "13",
  D: "14",
  E: "15",
  F: "16",
  G: "17",
  H: "18",
  I: "19",
  J: "21",
  K: "22",
  L: "23",
  M: "24",
  N: "25",
  O: "26",
  P: "27",
  Q: "28",
  R: "29",
  S: "32",
  T: "33",
  U: "34",
  V: "35",
  W: "36",
  X: "37",
  Y: "38",
  Z: "39",
  "&": "10",
  "%": "10",
};

const HOMO = "123456789ABCDEFGHIJKLMNPQRSTUVWXYZ".split("");

function getEq(c: string): string | null {
  if (EQUIVALENCIAS[c]) return EQUIVALENCIAS[c];
  if (c >= "0" && c <= "9") return c.padStart(2, "0");
  if (c === " ") return "00";
  return null;
}

function refHomoclave(name: string): string {
  let digits = "0";
  for (const ch of name) {
    const e = getEq(ch);
    if (e) digits += e;
  }
  let suma = 0;
  for (let i = 0; i < digits.length - 1; i++) {
    const d1 = +digits[i];
    const d2 = +digits[i + 1];
    suma += (d1 * 10 + d2) * d2;
  }
  const r = suma % 1000;
  return HOMO[Math.floor(r / 34)] + HOMO[r % 34];
}

const name = "PEREZ GOMEZ JUAN CARLOS";
console.log("ref homo", refHomoclave(name));
console.log(
  "engine",
  generateRfc({
    apellidoPaterno: "PEREZ",
    apellidoMaterno: "GOMEZ",
    nombre: "JUAN CARLOS",
    fechaNacimiento: "1985-01-15",
  })
);
