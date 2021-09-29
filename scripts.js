const Button = document.getElementById('openModal')

Button.addEventListener('click', Removedor)

const modal= document.querySelector('.modal-wrapper')

function Removedor(){

    modal.classList.remove('invisible')
}

document.addEventListener('keydown' , function Add(evento){

    const isESCkey= evento.key === 'Escape'

    if(isESCkey){
    modal.classList.add('invisible')
    }
})
