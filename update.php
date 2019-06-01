<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.

if ( $_POST['payload'] ) {
shell_exec( 'cd /home/ruurd/web/ruurd.dev/ && git reset –hard HEAD && git pull' );
}

?>
