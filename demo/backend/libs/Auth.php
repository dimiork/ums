<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/17/13
 * Time: 3:19 PM
 * To change this template use File | Settings | File Templates.
 */
class Auth
{
    public function handleLogin()
    {
        @session_start();
        if (isset($_SESSION['loggedIn'])) {
            session_destroy();
            exit;
        }
    }
}
