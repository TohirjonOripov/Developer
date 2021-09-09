<?php

namespace app\modules\admin\controllers;

use app\modules\admin\models\Admin;
use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;


class AuthController extends Controller
{
       public function actionLogin(){
           $model = new Admin();
           if (Yii::$app->session->has('email') && Yii::$app->session->has('password')){
               return $this->redirect(['auth/login']);
           }
           else{
               return $this->render('login',compact('model'));
           }
       }

       public function actionSignIn(){
           $model = new Admin();
           if ($model->load(Yii::$app->request->post())){
               $email = $model->email;
               $password = $model->password;
               if ($model->isAuth($email,$password)){
                   return $this->redirect(['main/index']);
               }
               else{
                   return $this->redirect(['auth/login']);
               }
           }
       }
       public function actionLogout(){
           Yii::$app->session->destroy();
           return $this->redirect(['auth/login']);
       }








}