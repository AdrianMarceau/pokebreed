<?

// Require the global config file
require_once('config.php');

// This script can ONLY be accessed without SSL so redirect if necessary
if (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off'){
    header('Location: '.str_replace('https://', 'http://', POKEBS_ROOT_URL).basename(__FILE__));
    exit();
}

// Otherwise, manually set the migrateMode flag then include the index
$_GET['migrateMode'] = 'true';
require('index.php');

?>