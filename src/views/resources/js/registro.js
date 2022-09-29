//definimos la variables que vamos a usar
let userString = '';
let passwordString = '';
let passwordString2 = '';
let respuesta = '';

// guardamos los elementos del DOM en variables
const usuario = document.getElementById('user');
const pass = document.getElementById('pass');
const pass2 = document.getElementById('pass2');
usuario.value='';
pass.value='';
pass2.value='';
const registro = document.getElementById('registro');
const recibido = document.getElementById('recibido');

//añadimos eventos que cada vez que el cliente escribe (tipea) lo captura
usuario.addEventListener('keyup',()=>{
    //en esta funcion recogemos el valor del input usuario
    userString = usuario.value;
    console.log('usuario: ' + userString);
    
});

pass.addEventListener('focusout',()=>{
    //en esta funcion recogemos el valor del input pass
    passwordString = pass.value;
    console.log('pass:' + passwordString);
    
});

pass2.addEventListener('focusout',()=>{
    //en esta funcion recogemos el valor del input pass2
    passwordString2 = pass2.value;
    console.log('pass2:' + passwordString2);
    
});

//añadimos un evento que cuando el elemento id = registro es clickado
// confirma contraseñas iguales y envia a consulta a BD si existe el usuario con ese nombre
// para darlo de alta en la BD.
registro.addEventListener('click',()=>{
    console.log('enviando datos');
    console.log('usuario:' + userString);
    console.log('pass:' + passwordString);
    console.log('pass2:' + passwordString2);

    if(passwordString === passwordString2){
        alert('dentro del if los pass son iguales');
    let data = new FormData();
    data.append('usuario',userString);
    data.append('password',passwordString);

    fetch('/src/services/consulta.php',{
    method : 'POST',
    body : data
})
.then((response)=>{
    if(response.ok) { return response.text(); }else{ throw 'Error en la llamada';}
})
.then ((texto)=>{
    

    if(texto == 'usuario y contraseña existen'){
        alert('ya existe un usuario con ese nombre');
        recibido.innerHTML='<a href="/src/views/login.html">Usuario ya existe</a>';
        };
})
.catch((fallo)=>{
    registro.innerHTML= 'Algo ha fallado';
})
}else{
    alert ('campos de contraseña distintos');
    
    window.location.reload();
};// fin if
});

