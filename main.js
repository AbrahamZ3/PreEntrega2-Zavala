
// función constructora para los autos
function Auto(marca, modelo, año, precio) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
  this.precio = precio;
}

//lista de autos 
const listaAutos = [
  new Auto('Toyota', 'Corolla', 2020, 25000),
  new Auto('Honda', 'Civic', 2019, 22000),
  new Auto('Ford', 'Mustang', 2021, 35000),
  new Auto('Chevrolet', 'Camaro', 2018, 32000),
  new Auto('Nissan', 'Sentra', 2022, 23000)
];

// Función para buscar autos
function buscarAutos() {
  const busqueda = prompt('Ingrese el modelo o la marca del auto que desea buscar:');
  let autosEncontrados = [];

  listaAutos.forEach(auto => {
    if (auto.modelo.toLowerCase().includes(busqueda.toLowerCase()) || auto.marca.toLowerCase().includes(busqueda.toLowerCase())) {
      autosEncontrados.push(auto);
    }
  });

 if (autosEncontrados.length > 0) {
    console.log('Autos encontrados:');
    autosEncontrados.forEach(auto => {
      console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Año: ${auto.año}, Precio: ${auto.precio}`);
    });
  } else {
    console.log('No se encontraron autos con ese modelo o marca.');
  }
} 

//Funcion para agregar agregar auto 

function agregarAuto() {
  let marca = prompt("ingresa la marca del auto")
  let modelo = prompt("ingresa el modelo del auto")
  let año = parseInt(prompt("ingresa el año del auto"))
  let precio = parseInt(prompt("ingresa el precio del auto"))

  if (isNaN(año) || isNaN(precio) || marca === null || modelo === null) {
    alert("Ingresa valores validos")
    return
  }

  let producto = new Auto(marca, modelo, año, precio)
  listaAutos.push(producto)
  console.table(listaAutos)
}

//boton para agregar autos
let boton = document.getElementById("btn1")
boton.addEventListener("click", agregarAuto)

// boton para buscar autos
let buscarBtn = document.getElementById('btn');
buscarBtn.addEventListener('click', buscarAutos);

//mostrando en pantalla



//almacenando en el local storage

if (localStorage.getItem("Autos")) {
  lista = JSON.parse(localStorage.getItem("Autos"));
} else {
  listaAutos = listaAutos
}
