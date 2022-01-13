const nameInput = document.querySelector('#nombre');
const language = document.querySelector('#estudios');
const mainList = document.querySelector('ul');
const actButton = document.querySelector('button');


actButton.addEventListener('click', () => {

    const list = document.createElement('li');
    nombre = nameInput.value;
    codigo = language.value;
    console.log(nombre);
    console.log(codigo);

    list.innerText = `${nombre} -> ${codigo}`;
    mainList.append(list);

    //limpia el nombre y el estudio y el input nombre queda a la espera de que ingrese un nuevo nombre
    nameInput.value = '';
    nameInput.focus();
    language.value = '';
    
})