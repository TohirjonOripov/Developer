<?php

namespace app\modules\admin\models;

use Yii;


class Admin extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%admin}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['fullname', 'email', 'password', 'status', 'role'], 'required'],
            [['status', 'role'], 'string'],
            [['fullname', 'email', 'password'], 'string', 'max' => 250],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'fullname' => 'Fullname',
            'email' => 'Email',
            'password' => 'Password',
            'status' => 'Status',
            'role' => 'Role',
        ];
    }

    public function isAuth($email,$password){
        $row= self::findOne([
            'email' => $email,
            'password' => $password
        ]);
        if (!empty($row)){
            Yii::$app->session->set('email',$row->email);
            Yii::$app->session->set('password',$row->password);
            Yii::$app->session->set('admin', $row);
            return true;
        }
        else{
            return false;
        }
    }
}
