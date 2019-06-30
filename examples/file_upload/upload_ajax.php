<?php
// ---------------------------------------------------------------
//	upload_ajax.php
//
//					Apr/22/2017
// ---------------------------------------------------------------
echo 'Hello<br />';

var_dump ($_FILES);
var_dump ($_POST['folder']);

$folder="dir_tmp";


if (isset ($_POST['folder']))
	{
	$folder = $_POST['folder'];
	}


if ($_FILES['file']) {
	$data = array ();
	$filename = $_FILES['file']['name'];
	$tmp_name = $_FILES['file']['tmp_name'];

var_dump( realpath($_FILES['file']['tmp_name']));

	$message = array ();
	$message[] = "*** upload_ajax.php *** start ***";
	$message[] = $filename;
	$message[] = $folder;

	$target = "./" . $folder . "/" . $filename;
	$message[] = $target;

try
{
	if (move_uploaded_file ($tmp_name,$target) == FALSE)
		{
       		$message[] = 'nothing is uploaded at ' . $_POST['now'];
		$message[] = $filename . " cannot be uploaded.";
		$message[] = 'tmp_name : ' . $tmp_name;
		$message[] = 'target : ' . $target;
		$message[] = $_FILES['file']['error'];
		}
	else
		{
		$message[] = $filename . " is uploaded.";
		}
}catch (PDOException $e){
    print('Error:'.$e->getMessage());
 //   die();
}

	$data['filename'] = $filename;

	$message[] = "*** upload_ajax.php *** end ***";
	$data['message'] = $message;

	header('Content-type: text/html');
	echo json_encode($data);
}
// ---------------------------------------------------------------
?>
