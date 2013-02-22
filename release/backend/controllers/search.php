<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/14/13
 * Time: 8:28 PM
 * To change this template use File | Settings | File Templates.
 */
class search extends Controller
{
    public function index()
    {
        // test search array request
        /*
                $request['name'] = 'petr';
                // ages
                $request['age']['greater']=22;
                $request['age']['less']=22;
                $request['age']['interval'] = [15, 20];

                $request['sex'] = 0;

                $request['education'] = 5;

                $request['army'] = 0;

                echo json_encode($request);*/

        //var_dump($request['age']['interval'][0]);

        $request = (new Post())->getJson();
        //$request=json_decode(file_get_contents('./testData/search.json'),true);
        if (!is_array($request)) {
            (new Json())->Error('There is no data to process.');
            return null;
        }

        $result = $this->model->Search($request);

        // server response
        if (is_array($result)) {
            (new Json())->Send($result);
        } else {
            (new Json())->Error('Search failure.');
        }
    }
}