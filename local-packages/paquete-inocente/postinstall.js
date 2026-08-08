// DEMO EDUCATIVA - Reto Semana 3 (versión "dependencia de terceros")
//
// A diferencia de scripts/postinstall-demo.js (que vive en el package.json
// de ESTE proyecto), este script vive dentro de "paquete-inocente": una
// dependencia local agregada al proyecto vía "file:local-packages/paquete-inocente".
// Desde el punto de vista del gestor de paquetes, es indistinguible de una
// dependencia real descargada del registro de npm.
//
// Por qué importa la diferencia:
//   - npm / Yarn clásico: ejecutan este postinstall automáticamente al
//     instalar, igual que el de la raíz (a menos que actives --ignore-scripts).
//   - pnpm >= 10: por defecto BLOQUEA los scripts de instalación de
//     dependencias. Al correr `pnpm install` deberías ver algo como
//     "1 package is looking for approval to run scripts" y este archivo
//     NO se ejecuta hasta que corras `pnpm approve-builds` y lo apruebes
//     explícitamente.
//
// Igual que el otro demo: NO hace peticiones de red reales, NO lee
// archivos sensibles (.env, llaves SSH, etc.), NO se ofusca. Es texto
// comentado a propósito para que se pueda explicar línea por línea.
//
// QUITAR DESPUÉS DE LA CLASE:
//   1. Borra la dependencia "paquete-inocente" de package.json.
//   2. Borra la carpeta local-packages/ completa.
//   3. Borra postinstall-dependencia-evidence.txt (si quedó) y corre
//      `pnpm install` / `npm install` de nuevo para limpiar el lockfile.

const fs = require('fs');
const os = require('os');
const path = require('path');

const datosRecolectados = {
  timestamp: new Date().toISOString(),
  usuario: os.userInfo().username,
  hostname: os.hostname(),
  sistemaOperativo: `${process.platform} ${os.release()}`,
  nodeVersion: process.version,
  ejecutadoDesde: __dirname,
};

console.log('\n\x1b[41m\x1b[97m%s\x1b[0m', '  ⚠  DEMO: postinstall de una DEPENDENCIA, no del proyecto  ');
console.log('\x1b[33m%s\x1b[0m', 'Este código vive dentro de "paquete-inocente" (node_modules), no en tu repo.');
console.log('Si lo estás viendo con pnpm, es porque aprobaste el build con `pnpm approve-builds`.\n');

console.log('Datos que un paquete malicioso real podría recolectar sin pedir permiso:');
console.log(datosRecolectados);

console.log('\nEn un ataque real, aquí se robarían tokens de CI, llaves SSH, .env, etc.');
console.log('\x1b[32m%s\x1b[0m', '  -> Esta demo NO hace nada de eso. Solo texto ilustrativo.\n');

const rutaEvidencia = path.join(__dirname, 'postinstall-dependencia-evidence.txt');
const contenido = [
  'Este archivo lo creó local-packages/paquete-inocente/postinstall.js.',
  'Simula el postinstall de una dependencia de terceros dentro de node_modules.',
  '',
  JSON.stringify(datosRecolectados, null, 2),
  '',
  'Bórralo junto con local-packages/ después de la demo.',
].join('\n');

fs.writeFileSync(rutaEvidencia, contenido, 'utf8');
console.log(`Se escribió "${path.basename(rutaEvidencia)}" junto al paquete como evidencia.\n`);
