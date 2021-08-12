<?php

namespace app\controllers;

use app\models\LoginForm;
use app\models\SignupForm;
use yii\web\Controller;
use Yii;

class AuthController extends Controller
{
    public function actionLogin()
    {
        if (!Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        }

        $model->password = '';
        return $this->render('login', [
            'model' => $model,
        ]);
    }

    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }

   public function actionSignup(){
        $model = new SignupFom();
         if ( $model->load(\Yii::$app->request->post())){
             if ($model->signup()){
              return $this->redirect(['auth/login']);
             }
//             debug($model);
         }
        return $this->render('signup',compact('model'));
   }

}