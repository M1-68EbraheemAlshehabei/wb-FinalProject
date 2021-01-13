<?php

// trying to store the data directly in to the txt file instead of storing it in the loacl storage, still under testing (future use) 
 
    ectract($_REQUEST);
    $file = fopen("userdata.txt","a");

    fwrite($file,"name:");
    fwrite($file, $username ."\n");
    fwrite($file, "Email :");
    fwrite($file, $useremail ."\n");
    fwrite($file, "Message :");
    fwrite($file, $usermessage ."\n");
    fclose($file);
?>