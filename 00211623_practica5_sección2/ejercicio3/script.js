const estanteria = {
    libros: [{
    nombre: 'El caballero oscuro',
    autor: 'Frank Miller',
    leido: false
},
{
    nombre: 'El mundo amarillo',
    autor: 'Albert Espinosa',
    leido: false,
},
{
    nombre: 'Harry Potter y el caliz de fuego',
    autor: 'J.K. Rowling',
    leido: true,
},
{
    nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    leido: false
},
{
    nombre: 'Berserk',
    autor: 'Kentaro Miura',
    leido: true
},
{
    nombre: 'Iliada',
    autor: 'Homero',
    leido: false
}],
    log() {
    for (const libro of this.libros) {
      const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
      console.log(`${prefijo} leído ${libro.nombre} de ${libro.autor}`);
    }
    },
    sugerencia() {
    const librosNoLeidos = this.libros.filter(libro => !libro.leido);
    if (librosNoLeidos.length === 0) {
      console.log("¡Ya has leído todos los libros!");
      return;
    }
    const indiceRandom = Math.floor(Math.random() * librosNoLeidos.length);
    const libroSugerido = librosNoLeidos[indiceRandom];
    console.log(`Te sugiero ${libroSugerido.nombre} de ${libroSugerido.autor}`);
    }
}

//Verificacion
estanteria. log()
estanteria. sugerencia()