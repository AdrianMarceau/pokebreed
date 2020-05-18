<?

// Define the global cache time and version number
$last_updated = '2020-05-18';
$version_number = '0.17.5';

// Set the access control headers to allow others to use it
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// If requested, print out the version number and exit
if (!empty($_GET['return'])){
    header('Content-type: text/plain;');
    if ($_GET['return'] === 'last_updated'){ echo $last_updated; }
    if ($_GET['return'] === 'version_number'){ echo $version_number; }
    exit();
}

?>
