const resultado = document.getElementById("resultado");
const marca = document.getElementById("marca");
const year = document.getElementById("year");
const precioMin = document.getElementById("minimo");
const precioMax = document.getElementById("maximo");
const puertas = document.getElementById("puertas");
const transmision = document.getElementById("transmision");
const color = document.getElementById("color");

cargarEventListener();
function cargarEventListener(){
    document.addEventListener("DOMContentLoaded",()=>{
        mostrarYear()
        mostrarAutos(autos);
    });
    marca.addEventListener("change",(e)=>{
        datosAuto.marca = e.target.value;
        filtrarAuto();
    });
    year.addEventListener("change",(e)=>{
        datosAuto.year = parseInt(e.target.value);
        filtrarAuto();
    });
    precioMin.addEventListener("change",(e)=>{
        datosAuto.minimo = parseInt(e.target.value);
        filtrarAuto();
    });
    precioMax.addEventListener("change",(e)=>{
        datosAuto.maximo = parseInt(e.target.value);
        filtrarAuto();
    });
    puertas.addEventListener("change",(e)=>{
        datosAuto.puertas = parseInt(e.target.value);
        filtrarAuto();
    });
    transmision.addEventListener("change",(e)=>{
        datosAuto.transmision = e.target.value;
        filtrarAuto();
    });
    color.addEventListener("change",(e)=>{
        datosAuto.color = e.target.value;
        filtrarAuto();
    });


}

const datosAuto = {
    marca:"",
    year:"",
    minimo:"",
    maximo:"",
    puertas:"",
    transmision:"",
    color:"",
}

function mostrarYear(){
    const max = new Date().getFullYear();
    const min = max-10;
    for(let i = max;i>=min;i--){
        const opcion = document.createElement("option");
        opcion.value=i;
        opcion.textContent=i;
        year.appendChild(opcion);
    }
}

function mostrarAutos(autos){
    limpiarHTML()
    autos.forEach(auto=>{
        const autoHTML = document.createElement("p");
        autoHTML.innerHTML= `
        <h5>${auto.marca} ${auto.modelo} - ${auto.year} - Precio: ${auto.precio}
        - Puertas: ${auto.puertas} - Color: ${auto.color} - Transmision: ${auto.transmision}</h5>
        `
        resultado.appendChild(autoHTML)
    })
}

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMin).filter(filtrarMax).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    if(resultado.length){
        mostrarAutos(resultado)
    }else{
        noResultado();
    }
    
}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement("p");
    noResultado.textContent="No se encontraron resultados, intenta con otras opciones";
    noResultado.classList.add("alerta","error");
    resultado.appendChild(noResultado)
}

function filtrarMarca(auto){
    if(datosAuto.marca){
        return datosAuto.marca === auto.marca
    }else{
        return auto
    }
}

function filtrarYear(auto){
    if(datosAuto.year){
        return datosAuto.year === auto.year
    }else{
        return auto
    }
}

function filtrarMin(auto){
    if(datosAuto.minimo){
        return datosAuto.minimo <= auto.precio
    }else{
        return auto
    }
}
function filtrarMax(auto){
    if(datosAuto.maximo){
        return datosAuto.maximo >= auto.precio
    }else{
        return auto
    }
}
function filtrarPuertas(auto){
    if(datosAuto.puertas){
        return datosAuto.puertas === auto.puertas
    }else{
        return auto
    }
}
function filtrarTransmision(auto){
    if(datosAuto.transmision){
        return datosAuto.transmision === auto.transmision
    }else{
        return auto
    }
}
function filtrarColor(auto){
    if(datosAuto.color){
        return datosAuto.color === auto.color
    }else{
        return auto
    }
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}