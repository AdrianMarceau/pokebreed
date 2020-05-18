<?

// LOAD SAVE FILE

// Require the global config file
require('../config.php');

// Collect the save name and pass from the request headers
$cloud_lock_name = !empty($_POST['lock']) && is_string($_POST['lock']) && preg_match('/^[-_a-z0-9\.]+$/i', $_POST['lock']) ? trim($_POST['lock']) : false;
$cloud_key_code = !empty($_POST['key']) && is_string($_POST['key']) ? trim($_POST['key']) : false; // password can be any string really

// If any of the above fields are false, we need to exit now
$errors = array();
if (empty($cloud_lock_name)){ $errors[] = 'Lock name not provided or invalid!'; }
if (empty($cloud_key_code)){ $errors[] = 'Key code not provided or invalid!'; }
if (!empty($errors)){ exit('error'.PHP_EOL.implode(PHP_EOL, $errors)); }

// Generate the filename based on the save name + pass + salt
$cloud_file_name = md5(strtolower($cloud_lock_name).POKEBS_SAVE_SALT).'_'.md5($cloud_key_code.POKEBS_SAVE_SALT).'.json';
$cloud_file_path = POKEBS_ROOT_DIR.'cloud/'.$cloud_file_name;

// If the file already exists, delete it before creating
if (!file_exists($cloud_file_path)){ exit('error'.PHP_EOL.'Save file with provided lock and key does not exist!'); }

// Otherwise read the save data into memory so we can return it
$cloud_save_data = file_get_contents($cloud_file_path);

// We're done here, so exit with success or failure based on if not empty
if (!empty($cloud_save_data)){ exit('success'.PHP_EOL.'Load from cloud successful!'.PHP_EOL.$cloud_save_data); }
else { exit('error'.PHP_EOL.'Load from cloud failed!'); }

?>