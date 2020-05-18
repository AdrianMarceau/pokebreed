<?

// Require the version number from another file
require('version.php');

// Define the root and common library directories for later
$is_https = !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? true : false;
define('ZLIBS_ROOT_DIR', '/var/www/html/libs/');
define('POKEBS_ROOT_DIR', '/var/www/html/pokebox.net/public_html/');
define('POKEBS_ROOT_URL', ($is_https ? 'https' : 'http').'://pokebox.net/');
define('POKEBS_DEBUG_MODE', false);
define('POKEBS_CACHE_FILES', false);
define('POKEBS_SAVE_SALT', 'It hurt itself in its confusion!');
define('GA_ACCOUNT_ID', false);

?>