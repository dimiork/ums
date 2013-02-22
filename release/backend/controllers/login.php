<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/17/13
 * Time: 2:53 PM
 * To change this template use File | Settings | File Templates.
 */
class login extends Controller
{
    public function index()
    {
        $credentials = (new Post())->getJson();
        //$credentials=json_decode(file_get_contents('./testData/login.json'),true);
        if (!is_array($credentials)) {
            (new Json())->Error('There is no data to process.');
            return null;
        }

        if (isset($credentials['login']) && isset($credentials['password']))
            $data = $this->model->Login($credentials['login'], $credentials['password']);

        if ($data) {
            (new Json())->OK(['name' => $data]);
        } else {
            (new Json())->Error("Authorization failure.");
        }
    }
}
