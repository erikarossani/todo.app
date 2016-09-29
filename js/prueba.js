window.addEventListener("load", function() {
    var lista = document.getElementById("lista");
    var tareaInput = document.getElementById("tareaInput");
    var btnTarea = document.getElementById("btnAgregar");

//funciones
function agregarTarea(){
    var tarea = tareaInput.value;
    var nuevaTarea = document.createElement("li");
    var enlace = document.createElement("a");
    var contenido = document.createTextNode(tarea);


    if (tarea === "") {
        tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
        tareaInput.className ="error";
        return false;
    }   

//Agregamos el contenido al enlace
    enlace.appendChild(contenido);
// le establecemos atributo href
    enlace.setAttribute("href", "#");
    nuevaTarea.appendChild(enlace);
    lista.appendChild(nuevaTarea); 
    tareaInput.value ="";

    for(var i = 0; i <=lista.children.length -1; i++){

        lista.children[i].addEventListener("click", function(){
        this.parentNode.removeChild(this);
        });
    }

}

function comprobarInput(){
    tareaInput.className ="";
    tareaInput.setAttribute("placeholder", "agregar una tarea");
}

function eliminarTarea(e){
    e.preventDefault();
    this.parentNode.removeChild(this);
}

//eventos

btnTarea.addEventListener("click", agregarTarea);

//comprobar input

tareaInput.addEventListener("click", comprobarInput);
//borrando elementos de la lista
for(var i = 0; i <=lista.children.length -1; i++){

    lista.children[i].addEventListener("click", eliminarTarea);
}
    
});

