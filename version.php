<?

// Define the global cache time and version number
$last_updated = '2018-04-26';
$version_number = '0.5.34';

// If requested, print out the version number and exit
if (!empty($_GET['return'])){
    header('Content-type: text/plain;');
    if ($_GET['return'] === 'last_updated'){ echo $last_updated; }
    if ($_GET['return'] === 'version_number'){ echo $version_number; }
    exit();
}

?>