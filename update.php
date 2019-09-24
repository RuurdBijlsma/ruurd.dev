<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.
if ( $_POST['payload'] ) {
	echo shell_exec('git reset --hard HEAD');
	echo shell_exec('git pull');
}

?>
