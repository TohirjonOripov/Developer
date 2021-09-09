<?php

namespace app\modules\admin\controllers;

use app\modules\admin\models\Admin;
use yii\web\Controller;


class DefaultController extends Controller
{
    public $admin;
    public $login;

    public function __construct($id, $module, $config = [])
    {
        $this->login = true;
        parent::__construct($id, $module, $config);
        if (\Yii::$app->session->has('email') && \Yii::$app->session->has('password')){
            $this->admin = Admin::findOne([
                'email' => \Yii::$app->session->get('email')
            ]);
        }
        else{

            unset($this->admin);
            $this->login = false;
        }
    }


    public function isLogin(){
        if (!$this->login){
            return $this->redirect(['auth/login']);
        }
    }


}
