//******************************VARIBALES******************************************************
//Obtenemos los datos de los botones y lo almacenamos en una variable
var boton_numeros=document.getElementsByName("dato_numerico")
var boton_operador=document.getElementsByName("dato_operador")
var boton_igual=document.getElementsByName("dato_igual") [0]
var boton_punto=document.getElementsByName("dato_punto") [0]
var boton_coma=document.getElementsByName("dato_coma") [0]
var boton_borrar_dato=document.getElementsByName("borar_dato") [0]
var boton_borrar_todo=document.getElementsByName("borrar_todo") [0]
var boton_nada=document.getElementsByName("no_hago_nada") [0]
//obtenemos el valor de la pantalla y lo almacenamos en una variable
var resultado=document.getElementById("resultado")
//en este apartado vamos a obtener el evento click
//osea se, el boton que este siendo precionado, pero al ser un vector
//tenemos que obtener cual de todos esta siendo utilizado, en caso que se
//quiera utilizar una variable con cada boton se puede hacer como mas adelante
//se muestra con variables de un solo boton
var operacion_actual=""
var operacion_anterior=""
var operacion_final=""
//*******************************EVENTOS CLICK*****************************************************
//EL EVENTO CLIC PARA LOS NUMEROS 
boton_numeros.forEach(function(boton){
    boton.addEventListener("click",function(){
        agregarNumero(boton.innerText)
    })
})
//EL EVENTO CLIC PARA LOS OPERADORES 
boton_operador.forEach(function(boton){
    boton.addEventListener("click",function(){
        agregarOperacion(boton.innerText)
    })
})
//EL EVENTO CLIC PARA EL IGUAL 
boton_igual.addEventListener("click",function(){
    calcular()
})
//EL EVENTO CLIC PARA EL PUNTO
boton_punto.addEventListener("click",function(){
    punto(boton_punto.innerText)
})
//EL EVENTO CLIC PARA LOS NUMEROS 
boton_coma.addEventListener("click",function(){
    coma(boton_coma.innerText)
})
//EL EVENTO CLIC PARA NADA 
boton_nada.addEventListener("click",function(){
    alert("NO HAGO NADA, GRACIAS POR OPRIMIRME :3")
})
//EL EVENTO CLIC PARA BORRAR DATOS
boton_borrar_dato.addEventListener("click",function(){
    borrar_dato()
})
//EL EVENTO CLIC PARA BORRAR TODO
boton_borrar_todo.addEventListener("click",function(){
    borrar_todo()
})
//********************************FUNCIONES***********************************************************
//ESTA FUNCION AGREGA EL NUMERO A LA PANTALLA
function agregarNumero(num){
    operacion_actual=operacion_actual.toString()+num.toString()
    actualizar_display()
}
//ESTA FUNCION AGREGA EL OPERADOR A LA PANTALLA
function agregarOperacion(operacion){
    if(operacion_actual==='') return;
    if(operacion_anterior!==''){
        calcular()
    }
    operacion_final=operacion.toString()
    operacion_anterior=operacion_actual
    operacion_actual="";
}
//eSTA FUNCION HACE TODAS LAS OPERACIONES MATEMATICAS
function calcular(){
    console.log("ENTRE A CALCULAR")
    var calcular=0;
    var anterior= parseFloat(operacion_anterior)
    var actual=parseFloat(operacion_actual)
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion_final){
        case '+':
            calcular=anterior+actual;
            break;
        case '-':
            calcular=anterior-actual;
            break;
        case 'X':
            calcular=anterior*actual;
            break;
        case '/':
            calcular=anterior/actual;
            break;
        default:
            return;
    }
    operacion_actual=calcular
    operacion_anterior=""
    operacion_final=""
    actualizar_display()
}
//ESTA FUNCION AGREGA UN PUNTO A LA PANTALLA
function punto(punt){
    operacion_actual=operacion_actual.toString()+punt.toString()
    actualizar_display()
}
//ESTA FUNCION AGRAGA UNA COMA A LA PANTALLA
function coma(com){
    operacion_actual=operacion_actual.toString()+com.toString()
    actualizar_display()
}
//ESTA FUNCION BORRA TODO DE LA PANTALLA E HISTORIAL
function borrar_todo(){
    operacion_actual=""
    operacion_anterior=""
    operacion_final=""
    actualizar_display()
}
//ESTA FUNCION BORRA EL ULTIMO DATO
function borrar_dato(){
    var lista = operacion_actual.split('')
    var posicion=lista.length
    lista.splice(posicion-1)
    operacion_actual=lista.join("")
    resultado.value=lista.join("")
}
//ACTUALIZA EL DISPLAY, OSEA MUESTRA LOS DATOS EN LA PANTALLA
function actualizar_display(){
    resultado.value=operacion_actual
}

borrar_todo()