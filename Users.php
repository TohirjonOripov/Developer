<?php

namespace app\modules\admin\models;

use Yii;

/**
 * This is the model class for table "{{%users}}".
 *
 * @property int $id
 * @property string $username
 * @property string $email
 * @property string $password
 * @property string $tel
 * @property string $manzili
 */
class Users extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%users}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['username', 'email', 'password', 'tel', 'manzili'], 'required'],
            [['username', 'email', 'manzili'], 'string', 'max' => 250],
            [['password'], 'string', 'max' => 50],
            [['tel'], 'string', 'max' => 255],
            [['email'], 'unique'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'username' => Yii::t('app', 'Username'),
            'email' => Yii::t('app', 'Email'),
            'password' => Yii::t('app', 'Password'),
            'tel' => Yii::t('app', 'Tel'),
            'manzili' => Yii::t('app', 'Manzili'),
        ];
    }
    public function getOrders(){
        return $this->hasMany(OrderItems::className(),
        [
            'user_id' => 'id'
        ]
        );
    }
}
