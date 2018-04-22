<?

/*
 * GLOBAL STYLE COMPRESSOR
 */

// Require the global config file
require('../config.php');

// Collect the file name if set, then check if it exists
$style_filename = false;
if (!empty($_GET['file'])
    && preg_match('/^(styles|data)\/([-_a-z0-9\.]+)\.css$/i', $_GET['file'])){
    $style_filename = trim($_GET['file']);
    if (!file_exists(POKEBS_ROOT_DIR.$style_filename)){
        $style_filename = false;
    }
}

// If the style file name was not set or not exists, exit now
if (!$style_filename){
    header('HTTP/1.0 404 Not Found');
    echo('File was not found!');
    exit();
}

// Require necessary class files for compressing the style in question
require(ZLIBS_ROOT_DIR.'minify-master/src/Minify.php');
require(ZLIBS_ROOT_DIR.'minify-master/src/CSS.php');
//require(ZLIBS_ROOT_DIR.'minify-master/src/JS.php');
require(ZLIBS_ROOT_DIR.'minify-master/src/Exception.php');
require(ZLIBS_ROOT_DIR.'minify-master/src/Exceptions/BasicException.php');
require(ZLIBS_ROOT_DIR.'minify-master/src/Exceptions/FileImportException.php');
require(ZLIBS_ROOT_DIR.'minify-master/src/Exceptions/IOException.php');
require(ZLIBS_ROOT_DIR.'path-converter-master/src/ConverterInterface.php');
require(ZLIBS_ROOT_DIR.'path-converter-master/src/Converter.php');

// Set the content types in the header
header('Content-type: text/css; charset=utf-8');

// Report all errors except E_NOTICE
error_reporting(E_ALL & ~E_NOTICE);

// Collect markup from the file, compress, and print
use MatthiasMullie\Minify;
$markup = file_get_contents(POKEBS_ROOT_DIR.$style_filename);
$minifier = new Minify\CSS($markup);
echo $minifier->minify();

?>