<?php

namespace app\modules\admin\controllers;

use Yii;
use app\modules\admin\models\Admin;
use app\modules\admin\models\AdminSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;



class AdminController extends DefaultController
{


    public function actionIndex()
    {
        if (!Yii::$app->session->has('admin')){
            return $this->redirect(['auth/login']);
        }
        $this->isLogin();
        if ($this->is()) {


            $searchModel = new AdminSearch();
            $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
        }

        else{
            Yii::$app->session->set('error',"Sizga bu sahifaga kirishga ruhsat berilmagan!");
            return $this->redirect(['main/error']);
        }
    }


    public function actionView($id)
    {
        if (!Yii::$app->session->has('admin')){
            return $this->redirect(['auth/login']);
        }

        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }


    public function actionCreate()
    {


        $model = new Admin();

            if (!Yii::$app->session->has('admin')) {
                return $this->redirect(['auth/login']);
            }

        if ($this->is()) {
            if ($model->load(Yii::$app->request->post()) && $model->save()) {
                return $this->redirect(['view', 'id' => $model->id]);
            }

            return $this->render('create', [
                'model' => $model,
            ]);
        }
        else{
            Yii::$app->session->set('error',"Sizga bu sahifaga kirishga ruhsat berilmagan!");
            return $this->redirect(['main/error']);
        }
    }


    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if (!Yii::$app->session->has('admin')){
            return $this->redirect(['auth/login']);
        }
        if ($this->is()) {
            if ($model->load(Yii::$app->request->post()) && $model->save()) {
                return $this->redirect(['view', 'id' => $model->id]);
            }

            return $this->render('update', [
                'model' => $model,
            ]);
        }
        else{
            Yii::$app->session->set('error',"Sizga bu sahifaga kirishga ruhsat berilmagan!");
            return $this->redirect(['main/error']);
        }
    }


    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        if (!Yii::$app->session->has('admin')){
            return $this->redirect(['auth/login']);
        }





        return $this->redirect(['index']);
    }


    protected function findModel($id)
    {
        if (($model = Admin::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }



    protected function isAdmin(){
        if (!Yii::$app->session->has('admin')){
            return $this->redirect(['auth/login']);
        }
    }


    protected function is(){
        if (Yii::$app->session->has('admin') && Yii::$app->session->get('admin')->role === 'junior'){
            return true;
        }
        else{
            return false;
        }
    }







}
