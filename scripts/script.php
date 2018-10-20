<?

/*
 * GLOBAL SCRIPT COMPRESSOR
 */

// Require the global config file
require('../config.php');

// Collect the file name if set, then check if it exists
$script_filename = false;
if (!empty($_GET['file'])
    && preg_match('/^(scripts|data)\/([-_a-z0-9\.\/]+)\.js$/i', $_GET['file'])){
    $script_filename = trim($_GET['file']);
    if (!file_exists(POKEBS_ROOT_DIR.$script_filename)){
        $script_filename = false;
    }
}

// If the script file name was not set or not exists, exit now
if (!$script_filename){
    header('HTTP/1.0 404 Not Found');
    echo('File was not found!');
    exit();
}

// Set the content types in the header
header('Content-type: text/javascript; charset=utf-8');

// Check to see if caching is turned on right now
if (POKEBS_CACHE_FILES === true){

    // Define the cache directory and filename for reference
    $cache_dir = POKEBS_ROOT_DIR.'cache/'.$version_number.'/';
    if (!is_dir($cache_dir)){ mkdir($cache_dir); }
    $cache_file = str_replace('/', '.', $script_filename);
    $cache_file_dir = $cache_dir.$cache_file;

    // If a (relevant) cache file already exists, display and exit
    if (file_exists($cache_file_dir)){
        $markup = file_get_contents($cache_file_dir);
        echo $markup;
        exit;
    }

}


// Require necessary class files for compressing the script in question
require(ZLIBS_ROOT_DIR.'minify-master/src/Minify.php');
//require(ZLIBS_ROOT_DIR.'minify-master/src/CSS.php');
require(ZLIBS_ROOT_DIR.'minify-master/src/JS.php');
require(ZLIBS_ROOT_DIR.'minify-master/src/Exception.php');
require(ZLIBS_ROOT_DIR.'minify-master/src/Exceptions/BasicException.php');
require(ZLIBS_ROOT_DIR.'minify-master/src/Exceptions/FileImportException.php');
require(ZLIBS_ROOT_DIR.'minify-master/src/Exceptions/IOException.php');
require(ZLIBS_ROOT_DIR.'path-converter-master/src/ConverterInterface.php');
require(ZLIBS_ROOT_DIR.'path-converter-master/src/Converter.php');

// Report all errors except E_NOTICE
error_reporting(E_ALL & ~E_NOTICE);

// Collect markup from the file, compress, and print
use MatthiasMullie\Minify;
$markup = file_get_contents(POKEBS_ROOT_DIR.$script_filename);
$minifier = new Minify\JS($markup);
$new_markup = $minifier->minify();

// If caching is allowed, make a static copy of this file
if (POKEBS_CACHE_FILES === true){
    if (file_exists($cache_file_dir)){ unlink($cache_file_dir); }
    $fh = fopen($cache_file_dir, 'w');
    fwrite($fh, $new_markup);
    fclose($fh);
    }

// Echo the new markup
echo $new_markup;

?>