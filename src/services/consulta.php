<?php

// TODO hacer realmente la consulta a la base de datos
if($_POST){
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];

    if($usuario =='asd' && $password == '123'){
        echo 'usuario y contraseña correctas';
    }else{
        echo 'no es posible logearse';
    }

};