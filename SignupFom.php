<?php

namespace app\models;

use yii\base\Model;


class SignupFom extends Model
{
  public $fullname;
  public $email;
  public $password;


  public function rules()
  {
   return[
      [['fullname','email','password'],'required'],
       ['fullname','string'],
       [['email'],'unique','targetClass' => 'app\models\Table','targetAttribute' => 'email'],
              ['email','email']
   ];
  }

  public function signup(){
      if ($this->validate()){
          $table = new Table();
          $table->attributes = $this->attributes;
//          $table->fullname = $this->fullname;
//          $table->email = $this->email;
//          $table->password = $this->password;
          return $table->create();
      }
  }


}