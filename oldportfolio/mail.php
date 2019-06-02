
<?php
  if($_POST){
    $name = $_POST['from'];
    $to = $_POST['to'];
    $message = $_POST['msg'];

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/html; charset=utf-8" . "\r\n";
    $headers .= "X-MSMail-Priority: High" . "\r\n";
    $headers .= "From: $name" . "\r\n";
    $headers .= "Reply-To: $name" . "\r\n";
    
    mail($to, "Bericht van " . $name, $message, $headers);  

    echo 'Succes';
  }

?>