<?php

namespace app\models;

use yii\db\ActiveRecord;
use yii\web\IdentityInterface;

class Table extends ActiveRecord implements IdentityInterface
{
    public function rules()
    {
     return[

     ];
    }


    public static function findIdentity($id)
    {
        return static::findOne($id);
    }

    public static function findIdentityByAccessToken($token, $type = null)
    {

    }

    public static function findEmail($email)
    {

        return static::findOne(['email' => $email]);

    }

    public function getId()
    {
        return $this->id;
    }


    public function getAuthKey()
    {
//        return $this->auth_key;
    }

    public function validateAuthKey($authKey)
    {
//        return $this->auth_key === $authKey;
    }

    public function validatePassword($password)
    {
        return $this->password === $password;
    }
    public function create(){
        return $this->save('false');
    }

}