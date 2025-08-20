let verduras = ['Lechuga', 'Tomate', 'Cebolla', 'Jitomate', 'Papa', 'Pimiento']; // Arreglo con datos

console.log(verduras[0]);
console.log(verduras[1]);
console.log(verduras[2]);
console.log(verduras[3]);

console.log(verduras.length);

console.log("Imprimiendo verduras con ciclo for")

for(let indice = 0; indice < verduras.length; indice++){
    console.log(verduras[indice]);
}

console.log("Metodos de arreglos");
let personas = []; // Arreglo vacio

personas.push('Ana'); // Agrega un elemento al final del arreglo
personas.push('Diego');
personas.push('Liset');
personas.push('Marcela'); 
console.log(personas);

personas.pop(); // Elimina el ultimo elemento del arreglo
console.log(personas);

personas.unshift('Alex'); // Agregando un elemento al inicio de mi arreglo
personas.unshift('Yolanda');
console.log(personas);

personas.shift(); // Elimina el primer elemento del arreglo
console.log(personas);

personas[1] = 'Monica'; // Modificar un elemento del arreglo
console.log(personas); 