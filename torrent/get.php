<?php
	 // echo "gettings: ".$_GET['url']."<br>";
	ini_set('user_agent','Mozilla/4.0 (compatible; MSIE 6.0)');
	echo file_get_contents($_GET['url']);
?>