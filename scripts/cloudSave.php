<?

// CLOUD SAVE FILE

// Require the global config file
require('../config.php');

// Collect the save name, pass, and data from the request headers
$cloud_lock_name = !empty($_POST['lock']) && is_string($_POST['lock']) && preg_match('/^[-_a-z0-9\.]+$/i', $_POST['lock']) ? trim($_POST['lock']) : false;
$cloud_key_code = !empty($_POST['key']) && is_string($_POST['key']) ? trim($_POST['key']) : false; // password can be any string really
$cloud_save_data = !empty($_POST['data']) && is_string($_POST['data']) && substr($_POST['data'], 0, 1) === '{' ? trim($_POST['data']) : false;

// If any of the above fields are false, we need to exit now
$errors = array();
if (empty($cloud_lock_name)){ $errors[] = 'Lock name not provided or invalid!'; }
if (empty($cloud_key_code)){ $errors[] = 'Key code not provided or invalid!'; }
if (empty($cloud_save_data)){ $errors[] = 'Save data not provided or invalid!'; }
if (!empty($errors)){ exit('error'.PHP_EOL.implode(PHP_EOL, $errors)); }

// Generate the filename based on the save name + pass + salt
$cloud_file_name = md5(strtolower($cloud_lock_name).POKEBS_SAVE_SALT).'_'.md5($cloud_key_code.POKEBS_SAVE_SALT).'.json';
$cloud_file_path = POKEBS_ROOT_DIR.'cloud/'.$cloud_file_name;

// If the file already exists, delete it before creating
if (file_exists($cloud_file_path)){ @unlink($cloud_file_name); }

// Create the new JSON file in the specified location
$file = fopen($cloud_file_path, 'w');
fwrite($file, $cloud_save_data);
fclose($file);

// We're done here, so exit with success or failure based on if created
if (file_exists($cloud_file_path)){ exit('success'.PHP_EOL.'Save to cloud successful!'); }
else { exit('error'.PHP_EOL.'Save to cloud failed!'); }

?>