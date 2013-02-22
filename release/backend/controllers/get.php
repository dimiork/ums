<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/14/13
 * Time: 8:28 PM
 * To change this template use File | Settings | File Templates.
 */
class get extends Controller
{
    public function index($id=null)
    {
        if(!isset($id)){
            (new Json())->Error('There is no defined id.');
            return null;
        }

        $data = $this->model->Get($id);

        if (isset($data['anketa'])) {
            (new Json())->Send($data);
        } else {
            (new Json())->Error("Card with id {$id} not found.");
        }
    }
}