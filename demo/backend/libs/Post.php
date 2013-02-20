<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/16/13
 * Time: 2:21 PM
 * To change this template use File | Settings | File Templates.
 */
class Post
{
    /**
     * Translates posted json to assoc array
     * @return mixed
     */
    public function getJson()
    {
        return json_decode(file_get_contents('php://input'),true);
    }
}
