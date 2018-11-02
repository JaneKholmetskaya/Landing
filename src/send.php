<?php
//Проверка отправилось ли наше поля name и не пустые ли они
$data = json_decode(file_get_contents("php://input"), TRUE);

var_dump($data);



  $to = 'kholmetskayaJane@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
  $subject = 'Запрос на обратный звонок'; //Заголовок сообщения
  $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>' . $data['nameUser'] . '</p>
                        <p>' . $data['phoneUser'] . '</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
  $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
//   $headers .= "From: Отправитель <".$_POST['email'].">\r\n"; //Наименование и почта отправителя

 error_reporting(E_ERROR | E_PARSE);

    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail