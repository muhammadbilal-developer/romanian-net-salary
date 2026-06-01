import { generateRfc } from "./rfcEngine";

const cases: {
  name: string;
  input: Parameters<typeof generateRfc>[0];
  expected: string;
}[] = [
  {
    name: "Juan Carlos Pérez Gómez",
    input: {
      apellidoPaterno: "PEREZ",
      apellidoMaterno: "GOMEZ",
      nombre: "JUAN CARLOS",
      fechaNacimiento: "1985-01-15",
    },
    expected: "PEGJ850115AB1",
  },
  {
    name: "María López (no materno)",
    input: {
      apellidoPaterno: "LOPEZ",
      apellidoMaterno: "",
      nombre: "MARIA",
      fechaNacimiento: "1990-12-25",
    },
    expected: "LOMA901225XY2",
  },
  {
    name: "Carlos Hernández (solo materno)",
    input: {
      apellidoPaterno: "",
      apellidoMaterno: "HERNANDEZ",
      nombre: "CARLOS",
      fechaNacimiento: "1988-06-10",
    },
    expected: "HECA880610ZB3",
  },
  {
    name: "García López 15/03/1985 (GALO example)",
    input: {
      apellidoPaterno: "GARCIA",
      apellidoMaterno: "LOPEZ",
      nombre: "OSCAR",
      fechaNacimiento: "1985-03-15",
    },
    expected: "GALO850315H7A",
  },
];

let failed = 0;
for (const c of cases) {
  const result = generateRfc(c.input);
  const ok = result.rfc === c.expected;
  if (!ok) {
    failed++;
    console.error(`FAIL ${c.name}: got ${result.rfc}, expected ${c.expected}`);
  } else {
    console.log(`OK   ${c.name}: ${result.rfc}`);
  }
}
process.exit(failed > 0 ? 1 : 0);
