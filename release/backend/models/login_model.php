<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/17/13
 * Time: 2:54 PM
 * To change this template use File | Settings | File Templates.
 */
class login_Model extends Model
{
    public function Login($username, $password)
    {
        $sth = $this->db->prepare("SELECT fullName FROM `user` WHERE
                login = :login AND password = :password");
        $sth->execute(array(
            ':login' => $username,
            ':password' => $password
        ));

        $data = $sth->fetch();

        if ($sth->rowCount() > 0) {
            // login
            Session::init();
            Session::set('loggedIn', true);
            return $data['fullName'];
        } else {
            return false;
        }
    }
}
