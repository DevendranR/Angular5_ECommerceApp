<?php
header("Access-Control-Allow-Origin: *");

$myemail = 'fiveyventures@gmail.com';//<-----Put Your email address here.

$data=json_decode(file_get_contents('php://input'),true);
$name=$data['name'];
$email=$data['email'];
$phone=$data['phone'];
$message=$data['message'];

$to = $myemail;
$email_subject = "Contact form submission: $name";
$email_body = "Hi Fiveyventures! \nYou have received a new message. ".
" Here are the details:
\nName: $name ".
"\nPhone: $phone".
"\nEmail: $email".
"\nMessage: $message\n";
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email";
$mail_sent=mail($to,$email_subject,$email_body,$headers);
if($mail_sent){
	print "mail sent successfully";
}else{
	print "mail send error";
}
?>