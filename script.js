const h1 = document.querySelector('h1');//selectores
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');//selectores
const input2 = document.querySelector('#calculo2');//selectores
const btn = document.querySelector('#btnCalcular');//selectores
const pResult = document.querySelector('#result')

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    const sumaInput = input1.value + input2.value; //guarda lo que los usuarios hacen como suma restas ect.
    pResult.innerText = "Resultado: " + sumaInput; 
}















