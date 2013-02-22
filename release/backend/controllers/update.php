<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/14/13
 * Time: 8:28 PM
 * To change this template use File | Settings | File Templates.
 */
class update extends Controller
{
    public function index($id = null)
    {
        // check id in url
        if (!isset($id)) {
            (new Json())->Error('There is no defined id.');
            return null;
        }

        // post simulation
        //$anketa = json_decode(file_get_contents('testData/update.json'), true);

        // check post data
        $anketa = (new Post())->getJson();
        if (!is_array($anketa)) {
            (new Json())->Error('There is no data to process.');
            return null;
        }

        // sanitize data
        $data=(new Sanitize())->SanitizeData($anketa);

        // load model
        if ($this->model->Update($id, $data)) {
            (new Json())->OK();
        } else {
            (new Json())->Error("Card with id {$id} update failure.");
        }
    }
}