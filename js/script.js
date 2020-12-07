const wrapper = document.getElementById('wrapper');
const modalul = document.getElementById('lista-padre');
const modal = document.getElementById('background');
const modalh2 = document.getElementById('Country-title');
const modalimg = document.getElementById('bandera');
function countries(Paises) {
  wrapper.innerHTML = '';
  for (let i = 0; i < Paises.length; i++) {
    const title = document.createElement('a');
    title.setAttribute('class', 'astyle');
    title.setAttribute('href', '#');
    title.innerHTML = `${Paises[i].name}`;
    wrapper.appendChild(title);
    title.addEventListener('click', () => {
      modal.style.display = 'block';
      wrapper.style.display = 'none';
      modalul.innerHTML = '';
      modalh2.innerHTML = `${Paises[i].name}`;
      modalimg.setAttribute('src', `${Paises[i].flag}`);
      modalimg.setAttribute('alt', 'Imagen del Pais');
      const lista1 = document.createElement('li');
      lista1.innerHTML = `Capital = ${Paises[i].capital}`;
      modalul.appendChild(lista1);
      const lista2 = document.createElement('li');
      lista2.innerHTML = `Region = ${Paises[i].region}`;
      modalul.appendChild(lista2);
      const lista3 = document.createElement('li');
      lista3.innerHTML = `Subregion = ${Paises[i].subregion}`;
      modalul.appendChild(lista3);
      const lista4 = document.createElement('li');
      lista4.innerHTML = `Poblacion = ${Paises[i].population}`;
      modalul.appendChild(lista4);
      const lista5 = document.createElement('li');
      lista5.innerHTML = `Aream2 = ${Paises[i].area}`;
      modalul.appendChild(lista5);
      const lista6 = document.createElement('li');
      lista6.setAttribute('id', `Idioma${Paises[i].name}`);
      modalul.appendChild(lista6);
      const lista7 = document.createElement('li');
      lista7.setAttribute('id', `Coins${Paises[i].name}`);
      modalul.appendChild(lista7);
      const idioma = document.getElementById(`Idioma${Paises[i].name}`);
      const coins = document.getElementById(`Coins${Paises[i].name}`);
      let idiom = '';
      let money = '';
      for (let n = 0; n < Paises[i].languages.length; n++) {
        const speak = `${Paises[i].languages[n].name} `;
        idiom = idiom.concat(speak);
      }
      idioma.innerHTML = `Idioma = ${idiom}`;
      for (let k = 0; k < Paises[i].currencies.length; k++) {
        const divisa = `${Paises[i].currencies[k].name} `;
        money = money.concat(divisa);
      }
      coins.innerHTML = `Moneda = ${money}`;
      const out = document.getElementById('equis');
      out.addEventListener('click', () => {
        modal.style.display = 'none';
        wrapper.style.display = 'block';
      });
    });
  }
}
const form = document.getElementById('formulario');
fetch('https://restcountries.eu/rest/v2/all')
  .then((response) => response.json())
  .then((data) => {
    const listaPaises = data;
    countries(listaPaises);
    form.addEventListener('input', (event) => {
      event.preventDefault();
      const value = form.elements[0].value;
      const PaisesEspecficos = listaPaises.filter((Pais) => Pais.name.toLowerCase().includes(`${value.toLowerCase()}`));
      if (PaisesEspecficos) {
        countries(PaisesEspecficos);
      }
    });
  });
