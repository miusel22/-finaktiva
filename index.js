const select = document.getElementById('select');
const number = document.getElementById('number');
const sendButton = document.getElementById('send-btn');
const numberListElement = document.getElementById('number-list');
const nonNumberList = document.getElementById('non-list');
const additionElement = document.getElementById('addition'); //definimos las variables que necesitamos 

select.addEventListener('change', arrayOperation); 
sendButton.addEventListener('click', addValueToArray);
let numberList = [];

function addValueToArray() {
  const { value } = number;
  if (value) { //agregamos el numero al array
    removeNonList();
    addNumberChild(value);
    numberList.push(parseInt(value));
    number.value = '';
  } else { //validación que no nos deja ingresar  al array si no es un numero o está vacio.
    window.alert('Debes ingresar un valor numérico.');
  }
}

function arrayOperation() { //funcion donde validamos el select
  const { value } = select; //destructuración del value
  switch (value) { //switch según el caso y llama a la función correspondiente
    case '2': 
      ordenarMayorMenor() 
      break;
    case '3':
      ordenarMenorMayor()
      break;
    case '4':
      sumarTodos()
      break;
    case '5':
      multiplicar()
      break;
    default:
      break;
  }
}

function ordenarMayorMenor() { //funcion que nos ordena el array de mayor a menor
  numberList = numberList.sort((a, b) => { return b - a; });
  showNumberList();
}

function ordenarMenorMayor() {
  numberList = numberList.sort((a, b) => { return a - b; }); //funcion que nos ordena el array de menor a mayor
  showNumberList();
}

function sumarTodos() { //funcion que nos suma todo del array
  const suma = numberList.reduce((a, b) => a + b, 0);
  additionElement.appendChild(document.createTextNode(`La suma de todos los números: ${suma}`));
}

function multiplicar() { //funcion que nos multiplica el numero por él mismo
  numberList = numberList.map((number) => {
    return number * number;
  })
  showNumberList();
}

function showNumberList() {
  numberListElement.innerHTML = '';
  additionElement.innerHTML = '';
  numberList.forEach((number) => {
    addNumberChild(number);
  });
}

function addNumberChild(value) { //funcion que nos pinta en listas lo que tiene el array
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(value));
  numberListElement.appendChild(li);
}

function removeNonList() { //se remueva una lista  según la función
  if (nonNumberList) {
    nonNumberList.innerHTML = '';
  }
}
function limpiarFormulario() {
  document.getElementById('non-list').reset(); //nos limpia los campos de la pagina.
}







