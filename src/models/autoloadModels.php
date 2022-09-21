<?php
spl_autoload_register(function($class){
    if(is_file(MODELS_PATH.$class.".php")){
        include MODELS_PATH.$class.".php";
    }
});