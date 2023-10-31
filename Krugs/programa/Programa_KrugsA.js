
let gastoTotal = Number(prompt("Por favor, ingrese su gasto total mensual:"));

let evaluacion;
if (gastoTotal <=500) {
  evaluacion = "Gasto Muy Bajo";
} else if (gastoTotal > 500 && gastoTotal < 1000) {
  evaluacion = "Gasto Moderado";
} else {
  evaluacion = "Gasto Alto";
}

console.log(`Su evaluación es: ${evaluacion}`);

console.log("Gracias por utilizar la calculadora de evaluación de gastos.");