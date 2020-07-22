<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$msg = $_POST['msg'];
$token = "1326484390:AAEoupNic4EhepLOj5aW6WklWipqbcIZAzQ"; // http://joxi.ru/v295MB7tzM6g72 - при создании бота в BotFather дается токен
$chat_id = "-489401765"; /* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates, где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее. http://joxi.ru/p27DqBgcWqBVXA - где потом взять chat_id */
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Сообщение' => $msg
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "Заявка успешно отправлена";
} else {
  echo "Error";
}
?>