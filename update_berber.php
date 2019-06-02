<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.
if ( $_POST['payload'] ) {
	echo shell_exec('cd /home/ruurd/web/berbersbakery.nl && git pull');
}

?>
