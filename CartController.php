<?php

namespace app\controllers;

use app\models\Orders;
use app\models\OrdersItems;
use app\models\Product;
use Codeception\Module\Yii1;
use yii\web\Controller;
use yii\filters\AccessControl;
use Yii;
class CartController extends AppController
{

    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
        ];
    }



    public function actionAddCart(){
      $id =  Yii::$app->request->get('id');
      $son = Yii::$app->request->get('son');
      $product = new Product();
      $model = Product::findOne($id);
      $this->layout = false;
      if (!empty($son)){
          $model->addToCart($model, $son);
          $product->saveDb($model, $son);
          return $this->redirect(Yii::$app->request->referrer); 
          
      }
      else{
          $model->addToCart($model);
          $product->saveDb($model);
          return $this->redirect(Yii::$app->request->referrer); 
      }

      $model->addToCart($model);
      $product->saveDb($model);
        $this->setMeta('Xarid savatcha');
        return $this->render('cart',compact('model'));
    }

    public function actionWashList(){
        $model = Orders::find()->asArray()->where(['user_id' => Yii::$app->user->identity->id])->all();

        return $this->render('add-cart',compact('model'));
    }


    public function actionDellItems(){
        $id = Yii::$app->request->get('id');
        $orders = Orders::findOne($id);
        $product = new Product();
        $product->DelItems($orders->product_id);


        if($orders->delete()){
          Yii::$app->session->setFlash('success','Ma\'umot o\'chirildi!');
          return $this->redirect(['cart/wash-list']);
        }
        else{
          Yii::$app->session->setFlash('success',"Ma'lumot o'chirilmadi");
            return $this->redirect(['cart/wash-list']);
        }
    }

     public function actionRemove(){
        $product= new Product();
        $product_id = Yii::$app->request->get('id');
        $orders = Orders::findOne([
            'user_id' => Yii::$app->user->identity->id,
            'product_id' => $product_id
        ]);
        $product->DelItems($product_id);
        $model = Orders::find()->asArray()->all();
        if($orders->delete()){
            Yii::$app->session->setFlash('soni', $_SESSION['cart.son']);
           return $this->render('cart', compact('model'));
        }
        else{
            return false;
           
        }
     }

     public function actionAddSave(){
        $id = Yii::$app->request->get('id');
        $pro_id = Yii::$app->request->get('product_id');
        if (isset($id)){
            $order = Orders::findOne($id);
            debug($order);
        }
        elseif (isset($pro_id)){
            $order = Orders::findOne([
               'user_id' => Yii::$app->user->identity->id,
                'product_id' => $pro_id
            ]);
        }
        $order = Orders::findOne($id);

        $product = new Product();
        $model = new OrdersItems();

        if ($model->load(Yii::$app->request->post())){
            $row = OrdersItems::findOne([
                'user_id' => Yii::$app->user->identity->id,
                'product_id' => $order->product_id,
                'status' => 'active'
            ]);
            if (!empty($row)){
              if ($row->save()){
                  $product->DelItems($order->product_id);
                  $order->delete();
                  Yii::$app->session->setFlash('success', 'Buyurtmangiz yuborildi.Buyurtma avval yuborilgan!');
              }
              else{
                  Yii::$app->session->setFlash('error','Yuborilmadi!');
                return $this->refresh();
              }
            }
            else {
                $model->user_id = Yii::$app->user->identity->id;
                $model->product_id = $order->product_id;
                $model->status = 'active';
                $model->date = date('Y-m-d');
                if ($model->save()) {
                    $product->DelItems($order->product_id);
                    $order->delete();
                    Yii::$app->session->setFlash('success', 'Buyurtmangiz yuborildi!');
                    return $this->redirect(['cart/oformit']);
                }
            }

            }
            else{
                Yii::$app->session->setFlash('error','Yuborilmadi!');
                return $this->redirect(['cart/oformit']);


            }




        return $this->render('add-save',compact('order','model'));
     }

      public function actionOformit(){
        $order_item = OrdersItems::find()
            ->asArray()
            ->where([
                'user_id' => Yii::$app->user->identity->id,
                'status' => 'active'
            ])
            ->orderBy(['id' => SORT_DESC])
            ->all();


        return $this->render('ofor',compact('order_item'));
      }

      public function actionAllSave(){
        $model = new OrdersItems();
        $order = Orders::find()->asArray()->where([
           'user_id' => Yii::$app->user->identity->id,
        ])->all();
        $product = new Product();

        if ($model->load(Yii::$app->request->post())){
            $fullname = $model->fullname;
            $email = $model->email;
            $phone = $model->phone;
            $address = $model->address;


            foreach ($order as $r){
                $del = Orders::findOne($r['id']);
            $row = OrdersItems::findOne([
                'user_id' => $r['user_id'],
                'product_id' => $r['product_id'],
                 'status' => 'active'
            ]);
            if (!empty($row)){
                $row->son += $r['son'];
                  $row->save();

            }
            else{
                $model->fullname = $fullname;
                $model->email = $email;
                $model->address = $address;
                $model->phone = $phone;
                $model->user_id = $r['user_id'];
                $model->product_id = $r['product_id'];
                $model->product_name = $r['name'];
                $model->son = $r['son'];
                $model->sum = $r['sum'];
                $model->images = $r['img'];
                $model->status = 'active';
                $model->date = date('Y-m-d');
                if ($model->save()){
                    $model = new OrdersItems();
                    $product->DelItems($r['product_id']);
                    $del->delete();
                    debug($model);
                    Yii::$app->session->setFlash('success',"Ma'lumotlar yuborildi");
                    return $this->redirect(['cart/oformit']);
                }

            }
            $product->DelItems($del->product_id);
              $del->delete();

            }
//            debug($model);
            Yii::$app->session->setFlash('success',"Maxsulotlar yuborildi!");
             return $this->redirect(['cart/oformit']);
        }
        return $this->render('all-save',compact('model','order'));
      }

      public function actionAllDelete(){
        $order = Orders::find()
            ->asArray()
            ->where(['user_id' =>Yii::$app->user->identity->id])
            ->all();
        $product = new Product();
        foreach ($order as $r){
            $del = Orders::findOne($r['id']);
            $product->DelItems($del->product_id);
            $del->delete();
        }

        return $this->redirect(Yii::$app->request->referrer);
      }
























}