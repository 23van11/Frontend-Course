const planetas = require('./planetas');

console.log("🌍 ¡Bienvenido al Registro Planetario! 🌍\n");

planetas.forEach((planeta, index) => {
  console.log(`🪐 Planeta #${index + 1}: ${planeta.nombre}`);
  console.log(`📜 Descripción: ${planeta.descripcion}`);
  console.log(`📅 Descubierto en: ${planeta.descubiertoEn}`);
  console.log('-----------------------------\n');
});


const cowsay = require('cowsay');
console.log(cowsay.say({
  text: "¡Exploración Iniciada!",
  e: "^^",
  T: "U "
}));
