<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/17/13
 * Time: 2:54 PM
 * To change this template use File | Settings | File Templates.
 */
class logout_Model extends Model
{
    public function Logout()
    {
        (new Session())->destroy();
        return true;
    }
}
