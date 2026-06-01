/**
 * Mexican RFC (persona física) — SAT public algorithm.
 * Framework-agnostic; 13 chars: AAAA + YYMMDD + homoclave (2) + dígito verificador (1).
 */

export interface RfcInput {
  apellidoPaterno: string;
  apellidoMaterno?: string;
  nombre: string;
  fechaNacimiento: string; // YYYY-MM-DD
}

export interface RfcResult {
  rfc: string;
  base: string;
  fecha: string;
  homoclave: string;
  dv: string;
}

const VOWELS = new Set(["A", "E", "I", "O", "U"]);

const PARTICLES = new Set([
  "DE",
  "LA",
  "LAS",
  "LOS",
  "Y",
  "DEL",
  "MC",
  "MAC",
  "VON",
  "VAN",
  "MI",
  "SAN",
  "SANTA",
]);

const COMPOUND_GIVEN_PREFIXES = new Set([
  "JOSE",
  "MA",
  "MARIA",
  "MA.",
  "J",
  "J.",
]);

const INCONVENIENT_WORDS = new Set([
  "BUEI",
  "BUEY",
  "CACA",
  "CACO",
  "CAGA",
  "CAGO",
  "CAKA",
  "CAKO",
  "COGE",
  "COGI",
  "COJA",
  "COJE",
  "COJI",
  "COJO",
  "COLA",
  "CULO",
  "FALO",
  "FETO",
  "GETA",
  "GUEI",
  "GUEY",
  "JETA",
  "JOTO",
  "KACA",
  "KACO",
  "KAGA",
  "KAGO",
  "KAKA",
  "KAKO",
  "KOGE",
  "KOJO",
  "KULO",
  "LILO",
  "LOCA",
  "LOCO",
  "LOKA",
  "LOKO",
  "MAME",
  "MAMO",
  "MEAR",
  "MEAS",
  "MEON",
  "MIAR",
  "MION",
  "MOCO",
  "MOKO",
  "MULA",
  "MULO",
  "NACA",
  "NACO",
  "PEDA",
  "PEDO",
  "PENE",
  "PIPI",
  "PITO",
  "POPO",
  "PUTA",
  "PUTO",
  "QULO",
  "RATA",
  "ROBA",
  "ROBE",
  "ROBO",
  "RUIN",
  "SENO",
  "TETA",
  "VACA",
  "VAGA",
  "VAGO",
  "VAKA",
  "VUEI",
  "VUEY",
  "WUEI",
  "WUEY",
]);

const HOMO_CHARS = "123456789ABCDEFGHIJKLMNPQRSTUVWXYZ";

const ANEXO_I: Record<string, string> = {
  " ": "00",
  "&": "10",
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
  Ñ: "40",
};

const ANEXO_III: Record<string, number> = {
  "0": 0,
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  G: 16,
  H: 17,
  I: 18,
  J: 19,
  K: 20,
  L: 21,
  M: 22,
  N: 23,
  "&": 24,
  O: 25,
  P: 26,
  Q: 27,
  R: 28,
  S: 29,
  T: 30,
  U: 31,
  V: 32,
  W: 33,
  X: 34,
  Y: 35,
  Z: 36,
  " ": 37,
  Ñ: 38,
};

export function stripAccents(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/Ü/g, "U")
    .replace(/ü/g, "u");
}

export function normalizeField(value: string): string {
  return stripAccents(value).trim().toUpperCase().replace(/\s+/g, " ");
}

function removeParticles(tokens: string[]): string[] {
  let i = 0;
  while (i < tokens.length && PARTICLES.has(tokens[i])) {
    i++;
  }
  return tokens.slice(i);
}

function cleanSurname(value: string): string {
  if (!value) return "";
  const tokens = removeParticles(normalizeField(value).split(" "));
  return tokens.join(" ") || "";
}

function cleanGivenName(value: string): string {
  const normalized = normalizeField(value);
  const tokens = normalized.split(" ").filter(Boolean);
  if (tokens.length === 0) return "";

  const first = tokens[0].replace(/\./g, "");
  if (COMPOUND_GIVEN_PREFIXES.has(first) && tokens.length > 1) {
    return tokens.slice(1).join(" ");
  }
  return normalized;
}

function firstLetter(value: string): string {
  return value.length > 0 ? value[0] : "X";
}

function secondLetter(value: string): string {
  return value.length > 1 ? value[1] : "X";
}

function firstInternalVowel(value: string): string {
  for (let i = 1; i < value.length; i++) {
    const ch = value[i];
    if (VOWELS.has(ch)) return ch;
  }
  return "X";
}

function filterInconvenient(four: string): string {
  if (INCONVENIENT_WORDS.has(four)) {
    return four.slice(0, 3) + "X";
  }
  return four;
}

function buildBaseLetters(
  paterno: string,
  materno: string,
  nombre: string
): string {
  const p = cleanSurname(paterno);
  const m = cleanSurname(materno);
  const n = cleanGivenName(nombre);

  let letters = "";

  if (!m && p) {
    letters =
      firstLetter(p) +
      secondLetter(p) +
      firstLetter(n) +
      secondLetter(n);
  } else if (!p && m) {
    letters =
      firstLetter(m) +
      secondLetter(m) +
      firstLetter(n) +
      secondLetter(n);
  } else if (p && m) {
    if (p.length <= 2) {
      letters =
        firstLetter(p) +
        firstLetter(m) +
        firstLetter(n) +
        secondLetter(n);
    } else {
      letters =
        firstLetter(p) +
        firstInternalVowel(p) +
        firstLetter(m) +
        firstLetter(n);
    }
  } else {
    letters = "XXXX";
  }

  return filterInconvenient(letters.padEnd(4, "X").slice(0, 4));
}

function formatDateYYMMDD(isoDate: string): string {
  const [y, mo, d] = isoDate.split("-").map(Number);
  const yy = String(y % 100).padStart(2, "0");
  const mm = String(mo).padStart(2, "0");
  const dd = String(d).padStart(2, "0");
  return `${yy}${mm}${dd}`;
}

function anexoIValue(ch: string): string | null {
  if (ANEXO_I[ch] !== undefined) return ANEXO_I[ch];
  if (ch >= "0" && ch <= "9") return ch.padStart(2, "0");
  return null;
}

function buildFullNameForHomoclave(
  paterno: string,
  materno: string,
  nombre: string
): string {
  return `${paterno || ""} ${materno || ""} ${nombre}`.trim();
}

function calculateHomoclave(fullName: string): string {
  let digits = "0";
  for (const ch of fullName) {
    const mapped = anexoIValue(ch);
    if (mapped !== null) digits += mapped;
  }

  let suma = 0;
  for (let i = 0; i < digits.length - 1; i++) {
    const d1 = Number(digits[i]);
    const d2 = Number(digits[i + 1]);
    suma += Number(`${d1}${d2}`) * d2;
  }

  const residuo = suma % 1000;
  const c1 = HOMO_CHARS[Math.floor(residuo / 34)];
  const c2 = HOMO_CHARS[residuo % 34];
  return c1 + c2;
}

function calculateCheckDigit(rfc12: string): string {
  let suma = 0;
  for (let i = 0; i < 12; i++) {
    const ch = rfc12[i] ?? " ";
    const value = ANEXO_III[ch] ?? 0;
    suma += value * (13 - i);
  }
  const residuo = suma % 11;
  if (residuo === 0) return "0";
  const dv = 11 - residuo;
  if (dv === 10) return "A";
  return String(dv);
}

export function isValidBirthDate(isoDate: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) return false;
  const date = new Date(`${isoDate}T12:00:00`);
  if (Number.isNaN(date.getTime())) return false;
  const [y, m, d] = isoDate.split("-").map(Number);
  if (
    date.getFullYear() !== y ||
    date.getMonth() + 1 !== m ||
    date.getDate() !== d
  ) {
    return false;
  }
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  return date <= today;
}

export interface RfcValidation {
  valid: boolean;
  errors: {
    apellidoPaterno?: string;
    nombre?: string;
    fechaNacimiento?: string;
  };
}

export function validateRfcInput(input: RfcInput): RfcValidation {
  const errors: RfcValidation["errors"] = {};
  const hasPaterno = Boolean(normalizeField(input.apellidoPaterno));
  const hasMaterno = Boolean(normalizeField(input.apellidoMaterno ?? ""));
  if (!hasPaterno && !hasMaterno) {
    errors.apellidoPaterno = "At least one surname (paternal or maternal) is required.";
  }
  if (!normalizeField(input.nombre)) {
    errors.nombre = "First name(s) are required.";
  }
  if (!input.fechaNacimiento || !isValidBirthDate(input.fechaNacimiento)) {
    errors.fechaNacimiento = "Enter a valid birth date (not in the future).";
  }
  return { valid: Object.keys(errors).length === 0, errors };
}

export function generateRfc(input: RfcInput): RfcResult {
  const paterno = normalizeField(input.apellidoPaterno);
  const materno = normalizeField(input.apellidoMaterno ?? "");
  const nombre = normalizeField(input.nombre);

  const base = buildBaseLetters(paterno, materno, nombre);
  const fecha = formatDateYYMMDD(input.fechaNacimiento);
  const fullName = buildFullNameForHomoclave(paterno, materno, nombre);
  const homoclave = calculateHomoclave(fullName);
  const rfc12 = base + fecha + homoclave;
  const dv = calculateCheckDigit(rfc12);

  return {
    rfc: rfc12 + dv,
    base,
    fecha,
    homoclave,
    dv,
  };
}
