<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/14/13
 * Time: 7:44 PM
 * To change this template use File | Settings | File Templates.
 */

require 'config.php';

// using autoloader
function __autoload($class) {
    require LIBS . $class .".php";
}


$app=new Bootstrap();