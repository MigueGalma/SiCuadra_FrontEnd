// Captura del JSON

fetch('https://miguegalma.pythonanywhere.com/respuesta')
    .then(response => response.json())
    .then(data => {console.log(data) 
            var ph1= document.getElementById('mens1')
            ph1.innerHTML = `Pedido nro: ${data[0].idRegistros}`
            var ph2= document.getElementById('mens2')
            ph2.innerHTML = `Nombre:  ${data[0].nombre}`
            var ph3= document.getElementById('mens3')
            ph3.innerHTML = `Apellido:  ${data[0].apellido}`
            var ph4= document.getElementById('mens4')
            ph4.innerHTML = `Tema:  ${data[0].tematica}`
            var ph5= document.getElementById('mens5')
            ph5.innerHTML = `Orientacion:  ${data[0].orientacion}`
            var ph6= document.getElementById('mens6')
            ph6.innerHTML = `Medidas:  ${data[0].medidas}`
            var ph7= document.getElementById('mens7')
            ph7.innerHTML = `Precio:  $${data[0].precio}`
            var ph8= document.getElementById('mens8')
            ph8.innerHTML = "Su pedido ha sido guardado. Si esta interesado, envíenos la imagen por medio de este correo: pedidos@sicuadra.com. Le responderemos acerca la forma de envío y los medios de pago"

        })


    
    
    
    

// Devolucion de los valores

//var ph1 = document.getElementById('mens1');
//ph1.innerHTML= registro[0] ;




    
    






        

