const select = document.getElementById('select');
const number = document.getElementById('number');
const sendButton = document.getElementById('send-btn');
const numberListElement = document.getElementById('number-list');
const nonNumberList = document.getElementById('non-list');
const additionElement = document.getElementById('addition');

select.addEventListener('change', arrayOperation);
sendButton.addEventListener('click', addValueToArray);
let numberList = [];

function addValueToArray() {
  const { value } = number;
  if (value) {
    removeNonList();
    addNumberChild(value);
    numberList.push(parseInt(value));
    number.value = '';
  } else {
    window.alert('Debes ingresar un valor numérico.');
  }
}

function arrayOperation() {
  const { value } = select;
  switch (value) {
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

function ordenarMayorMenor() {
  numberList = numberList.sort((a, b) => { return b - a; });
  showNumberList();
}

function ordenarMenorMayor() {
  numberList = numberList.sort((a, b) => { return a - b; });
  showNumberList();
}

function sumarTodos() {
  const suma = numberList.reduce((a, b) => a + b, 0);
  additionElement.appendChild(document.createTextNode(`La suma de todos los números: ${suma}`));
}

function multiplicar() {
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

function addNumberChild(value) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(value));
  numberListElement.appendChild(li);
}

function removeNonList() {
  if (nonNumberList) {
    nonNumberList.innerHTML = '';
  }
}
function limpiarFormulario() {
  document.getElementById("myForm").reset();
}







