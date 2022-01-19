let checkBox = document.querySelector('#switch');
let cabecera = document.querySelector('.cabecera');
let contenedor = document.querySelector('.contenedor');
let cuerpo = document.querySelector('body')
let caja = document.querySelectorAll('.caja')
var i = 0;

checkBox.addEventListener("change", validaCheckbox, false);
function validaCheckbox()
{
    var checked = checkBox.checked;
if(checked){
    cabecera.classList.add('cabeceradark');
    cuerpo.classList.add('bodydark');
    contenedor.classList.add('contenedordark');
    for (i = 0; i <= caja.length; i++) {
        caja[i].classList.add('cajadark')
    }
}else{
    cabecera.classList.remove('cabeceradark');
    contenedor.classList.remove('contenedrodark');
    cuerpo.classList.remove('bodydark');
    for (i = 0; i <= caja.length; i++) {
        caja[i].classList.remove('cajadark')
    }
}
}

console.log(caja)