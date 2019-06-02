<?php

    session_start();
    if($_POST)
    {
        $name = $_POST['to'];
        $subject = "New message from $name";
        $message = $_POST['msg'];
        $from = $_POST['from'];

        if(!empty($name) && !empty($subject) && !empty($message))
        {
            $message = strip_tags($message);

            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type: text/html; charset=utf-8" . "\r\n";
            $headers .= "X-MSMail-Priority: High" . "\r\n";
            $headers .= "From: ruurd@bijlsma.dev\r\n";
            $headers .= "Reply-To: " . $from . "\r\n";
            $headers .= 'X-Mailer: PHP/' . phpversion();

            mail("Contact Ruurd Bijlsma <ruurd@bijlsma.dev>", $subject, $message, $headers);

            echo "success";
        }
    }

?>