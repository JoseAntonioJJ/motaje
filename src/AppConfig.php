<?php
//quitamos los espacios al final de la uri por si los hubiese
$uri = rtrim($_SERVER['REQUEST_URI']);
$path = rtrim($_SERVER['PATH_INFO']);
define('URI',$uri);
define('PATH',$path);
unset($uri);
unset($path);

//rutas relativas de las principales carpetas 
//para centralizar la posible modificación de las mismas
define('CONTROLLERS_PATH','src/controllers/');
define('MODELS_PATH','src/models/');
define('SERVICES_PATH','src/services/');

define('VIEWS_PATH','src/views/');
define('TEMPLATES_PATH','src/views/templates/');

define('CSS_PATH','src/views/css/');
define('JAVASCRIPT_PATH','src/views/js/');

define('FONTS_PATH','assets/fonts/');
define('ICONS_PATH','assets/icons/');
define('IMAGES_PATH','assets/images/');

define('TESTS_PATH','tests/');