const url = 'http://127.0.0.1:5000/respuesta/answer.json';

const response = await fetch(url);

const data = await response.json();

console.log(data)






        

