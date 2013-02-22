<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/14/13
 * Time: 9:53 PM
 * To change this template use File | Settings | File Templates.
 */
class Json
{
    /**
     * Send data in array to user in json format
     * @param array $data
     */
    public function Send($data = [])
    {
        echo json_encode($data);
    }

    public function Error($message=null)
    {
        $response['status'] = 'error';
        if(isset($message)) $response['message'] = $message;
        $this->Send($response);
    }

    public function OK($data=null)
    {
        $response['status'] = 'OK';
        if(is_array($data)) $response += $data;
        if(is_string($data)) $response['message'] = $data;
        $this->Send($response);
    }
}
