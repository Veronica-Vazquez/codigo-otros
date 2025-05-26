const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Se cambian nombre de variables para mayor legibilidad y se cambia # por . ya que en el HTML se tiene estas clases definidas en las etiquetas de parrafo
const $name = document.querySelector('.name');
const $blog = document.querySelector('.blog');
const $location = document.querySelector('.location');

//Error en sintaxi, se agrega async
//Se elimina console.log(data), ya que solo era de prueba, cabe mencionar que data no era una variable declarada, en su lugar se debio de usar response

async function displayUser(username) {
  $name.textContent = 'cargando...';
  
  const response = await fetch(`${usersEndpoint}/${username}`);
  
  $name.textContent = '${response.name}';
  $blog.textContent = '${response.blog}';
  $location.textContent = '${response.location}';
}

//Se eliminan console.log() de prueba
function handleError(err) {
  //Se agrega $ en name, ya que no estaba respetando el nombre de la variable
  $name.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);