<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/17/13
 * Time: 2:51 PM
 * To change this template use File | Settings | File Templates.
 */
class Session
{
    public function init()
    {
        @session_start();
        return $this;
    }

    public function set($key, $value)
    {
        $_SESSION[$key] = $value;
        return $this;
    }

    public function get($key)
    {
        @session_start();
        if (isset($_SESSION[$key]))
            return $_SESSION[$key];
    }

    public function destroy()
    {
        session_destroy();
        return $this;
    }
}
