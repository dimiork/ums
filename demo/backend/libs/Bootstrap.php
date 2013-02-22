<?php
/**
 * Created by JetBrains PhpStorm.
 * User: sergey
 * Date: 2/14/13
 * Time: 7:49 PM
 * To change this template use File | Settings | File Templates.
 */
class Bootstrap
{
    private $_controllerPath = 'controllers/'; // Always include trailing slash
    private $_modelPath = 'models/'; // Always include trailing slash

    private $_url = null; // current url
    private $_controller = null; // controller instance

    public function __construct()
    {
        // process current url
        $this->_url = $this->_parseURL();
        // check authorization or allow to login
        if ((new Session)->get('loggedIn') || $this->_url[0] == 'login') {
            if (isset($this->_url[0])) {
                $this->_loadController($this->_url[0]);
                $this->_callControllerMethod();
            } else {
                // error controller not found
                (new Json())->Error('Wrong URL.');
            }
        } else {
            (new Json())->Error('You are not authorized.');
        }

    }

    private function _parseURL()
    {
        $url = null;
        if (isset($_SERVER['PATH_INFO'])) {
            $url = $_SERVER['PATH_INFO'];
            $url = ltrim($url, '/');
            $url = explode('/', $url);
        }
        return $url;
    }

    /**
     * Load controller if there IS a GET parameter passed
     *
     * @return boolean|string
     */
    private function _loadController($controller)
    {
        $file = $this->_controllerPath . $controller . '.php';

        if (file_exists($file)) {
            require $file;
            $this->_controller = new $controller;
            $this->_controller->loadModel($controller, $this->_modelPath);
        } else {
            //! error
            return false;
        }
    }

    /**
     * If a method is passed in the GET url paremter
     *
     *  http://localhost/controller/method/(param)/(param)/(param)
     *  url[0] = Controller
     *  url[1] = Method
     *  url[2] = Param
     */
    private function _callControllerMethod()
    {
        $length = count($this->_url);

        // Make sure the method we are calling exists
        if ($length > 1) {
            if (!method_exists($this->_controller, $this->_url[1])) {
                //! error
            }
        }
        //var_dump($this->_controller);
        // Determine what to load
        switch ($length) {
            /*case 3:
                //Controller->Method(Param1, Param2)
                $this->_controller->{$this->_url[1]}($this->_url[2]);
                break;
*/
            case 2:
                //Controller->Method(Param1, Param2)
                //$this->_controller->{$this->_url[1]}();
                $this->_controller->index($this->_url[1]);
                break;

            default:
                $this->_controller->index();
                break;
        }
    }
}