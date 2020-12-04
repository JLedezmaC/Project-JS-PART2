const wrapper = document.getElementById('wrapper');
function countries (Paises){
  Paises.forEach(Pais => {
    const title = document.createElement('a');
    title.setAttribute('class', 'astyle')
    title.setAttribute('href', '#')
    title.innerHTML = `${Pais.name}`;
    wrapper.appendChild(title);
    title.addEventListener('click', (event)=>{
      const actual = event.currentTarget;
      const modal = document.getElementById('background');
      const modalh2 = document.getElementById('Country-title');
      const modalimg = document.getElementById('bandera');
      const modalul = document.getElementById('lista-padre');
      modal.style.display = 'block';
      wrapper.style.display = 'none';
      modalul.innerHTML = '';
      modalh2.innerHTML = `${Pais.name}`;
      modalimg.setAttribute('src', `${Pais.flag}`)
      const lista1 = document.createElement('li');
      lista1.innerHTML = `Capital = ${Pais.capital}`;
      modalul.appendChild(lista1);
      const lista2 = document.createElement('li');
      lista2.innerHTML = `Region = ${Pais.region}`;
      modalul.appendChild(lista2);
      const lista3 = document.createElement('li');
      lista3.innerHTML = `Subregion = ${Pais.subregion}`;
      modalul.appendChild(lista3);
      const lista4 = document.createElement('li');
      lista4.innerHTML = `Poblacion = ${Pais.population}`;
      modalul.appendChild(lista4);
      const lista5 = document.createElement('li');
      lista5.innerHTML = `Aream2 = ${Pais.area}`;
      modalul.appendChild(lista5);
      const lista6 = document.createElement('li');
      lista6.innerHTML = `Lenguaje = ${Pais.languages}`;
      modalul.appendChild(lista6);
      const lista7 = document.createElement('li');
      lista7.innerHTML = `Moneda = ${Pais.currencies}`;
      modalul.appendChild(lista7);
      const out = document.getElementById('equis');
      out.addEventListener('click', () =>{
        modal.style.display = 'none';
        wrapper.style.display = 'block';
      })
    })
  });
}





fetch('https://restcountries.eu/rest/v2/all')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    countries(data)
  });
