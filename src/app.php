<?php 

// .... your code .... 

//mail("me@mysite.co.uk", $subject, $msg)
//header("Location: /index.htm");

if(mail("site.com", $subject, $msg)) {
    $data['success'] = true;
}
else{
    $data['success'] = false;
}

// convert the $data to json and echo it
// so jQuery can grab it and understand what happend
echo json_encode($data);

?>