// Programa que devuelve los datos del BackEnd

var myPlaceholder = document.getElementById("placeholder")

fetch('http://127.0.0.1:5000/respuesta')
    .then(response => response.json())
    .then(data => { 
        console.log(data)
        for (var product of data) {
            addItemList(myPlaceholder, product.nombre)
        } 
    })