<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.
if ( $_POST['payload'] ) {
	echo shell_exec('git checkout -f');
	echo shell_exec('git pull');
}

?>
