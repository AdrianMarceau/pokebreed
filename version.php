<?

// Define the global cache time and version number
$last_updated = '2020-03-22';
$version_number = '0.17.1';

// If requested, print out the version number and exit
if (!empty($_GET['return'])){
    header('Content-type: text/plain;');
    if ($_GET['return'] === 'last_updated'){ echo $last_updated; }
    if ($_GET['return'] === 'version_number'){ echo $version_number; }
    exit();
}

?>
