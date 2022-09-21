<?php
spl_autoload_register(function($class){
    if(is_file(SERVICES_PATH.$class.".php")){
        include SERVICES_PATH.$class.".php";
    }
});