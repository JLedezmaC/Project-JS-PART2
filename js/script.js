const wrapper = document.getElementById('wrapper');
function countries (Paises){
  Paises.forEach(Pais => {
    const title = document.createElement('a');
    title.setAttribute('class', 'astyle')
    title.setAttribute('href', '#')
    title.innerHTML = `${Pais.name}`
    wrapper.appendChild(title);
    title.addEventListener('click', (event)=>{

    })
  });
}

fetch('https://restcountries.eu/rest/v2/all')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    countries(data)
  });
