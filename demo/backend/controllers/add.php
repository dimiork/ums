<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/14/13
 * Time: 8:28 PM
 * To change this template use File | Settings | File Templates.
 */
class add extends Controller
{
    function index()
    {
        // post simulation
        //$anketa = json_decode(file_get_contents('testData/add.json'), true);

        $anketa = (new Post())->getJson();
        if (!is_array($anketa)) {
            (new Json())->Error('There is no data to process.');
            return null;
        }

        //! data validation

        // load model
        $id = $this->model->Add($anketa);

        // server response
        if ($id) {
            (new Json())->OK(['id' => $id]);
        } else {
            (new Json())->Error('Anketa addition failure.');
        }

        // debug
        //var_dump($anketa);
        //echo __CLASS__ . ' ' . __FUNCTION__ . '<br />';
    }
}