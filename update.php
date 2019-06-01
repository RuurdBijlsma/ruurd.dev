<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.
echo "doei";
if ( $_POST['payload'] ) {
echo "hoi";
shell_exec( 'cd /home/ruurd/web/ruurd.dev/ && git reset –hard HEAD && git pull' );
}

?>
