<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/17/13
 * Time: 2:53 PM
 * To change this template use File | Settings | File Templates.
 */
class logout extends Controller
{
    public function index()
    {
        $data = $this->model->Logout();

        if ($data) {
            (new Json())->OK();
        } else {
            (new Json())->Error("Logout failure.");
        }
    }
}
