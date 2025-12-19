// Declaración de variables
let puntos1 = 0
let puntos2 = 0

const marcador1 = document.getElementById('puntos1')
const marcador2 = document.getElementById('puntos2')

const equipo1 = document.getElementById('equipo1')
const equipo2 = document.getElementById('equipo2')

const historial = document.getElementById('lista-historial')

const botones = document.querySelectorAll("button[data-equipo]")

//Nombres de los equipos
document.getElementById('form-nombres').addEventListener('submit', function(e){
    e.preventDefault()

    const nuevo1 =document.getElementById('input1').value.trim()
    const nuevo2 = document.getElementById('input2').value.trim()

    if(nuevo1 !== ""){
        equipo1.querySelector('.nombre').textContent = nuevo1
    }

    if(nuevo2 !== ""){
        equipo2.querySelector('.nombre').textContent = nuevo2
    }

})

//Sumar puntos
botones.forEach(boton => {
    boton.addEventListener("click", ()=>{
        const eq = boton.dataset.equipo
        const suma = parseInt(boton.dataset.suma ) 

        if(eq === "1"){
            puntos1 += suma
            marcador1.textContent = puntos1
        } else {
            puntos2 += suma
            marcador2.textContent = puntos2
        }
    })
})

