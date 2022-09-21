<?php
spl_autoload_register(function($class){
    if(is_file(CONTROLLERS_PATH.$class.".php")){
        include CONTROLLERS_PATH.$class.".php";
    }
});