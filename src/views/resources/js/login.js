//definimos la variables que vamos a usar
let userString = '';
let passwordString = '';

// guardamos los elementos del DOM en variables
const usuario = document.getElementById('user_login');
const pass = document.getElementById('pass_login');
const enviar = document.getElementById('enviar_login');
const recibido = document.getElementById('recibido')

//añadimos eventos que cada vez que el cliente escribe (tipea) lo captura
usuario.addEventListener('keyup',()=>{
    //en esta funcion recogemos el valor del input usuario
    userString = usuario.value;
    
});

pass.addEventListener('keyup',()=>{
    //en esta funcion recogemos el valor del input pass
    passwordString = pass.value;
    
});

//añadimos un evento que cuando el elemento id = enviar es clickado envia a consulta a BD si existe el usuario con esa contraseña
enviar.addEventListener('click',()=>{
    console.log('enviando datos');
    console.log('usuario:' + userString);
    console.log('pass:' + passwordString);

    let data = new FormData();
    data.append('usuario',userString);
    data.append('password',passwordString);

    fetch('../../src/services/consulta.php',{   
    body : data
})
.then((response)=>{
    if(response.ok) { return response.text(); }else{ throw 'Error en la llamada';}
})
.then ((texto)=>{
    recibido.innerHTML=texto;
})
.catch((fallo)=>{
    enviar.innerHTML('Algo ha fallado')
})

});

