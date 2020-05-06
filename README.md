# PokéBox Breeding Simulator
An unofficial Pokémon breeding simulator that's less about building strong teams and more about hatching lots of eggs.
Try it out for yourself at http://pokebox.net/

## Setup

1.  **Clone or download a copy of the repository to your web directory.**
>  For our example, let's set you put it in `/var/www/html/pokebox.net/public_html/`

2.  **Make a copy of the config file `config.sample.php` and rename it to `config.php`.**
>  Update the paths if necessary with your own.  On a Mac or Linux server your paths might look like:
```
define('ZLIBS_ROOT_DIR', '/var/www/html/libs/');
define('POKEBS_ROOT_DIR', '/var/www/html/pokebox.net/public_html/');
define('POKEBS_ROOT_URL', 'http://localhost/pokebox.net/public_html/');
```
>  While on a Windows server (like with WAMP or XAMPP) your paths might look more like:
```
define('ZLIBS_ROOT_DIR', 'C:/wamp/www/zlibs/');
define('POKEBS_ROOT_DIR', 'C:/wamp/www/pokebox.net/public_html/');
define('POKEBS_ROOT_URL', 'http://localhost/pokebox.net/public_html/');
```

3.  **Ensure the "ZLIBS" folder exists in the location you specified above.**
>  It doesn't need to be exactly like what's above but it'll make the setup easier.

4.  **Clone the following repositories into the appropriate ZLIB paths:**
>  PokeBox depends on these libraries to function.  Thanks to the creator for writing them!
-  https://github.com/matthiasmullie/minify  (should be cloned to `ZLIBS_ROOT_DIR/minify-master/`)
-  https://github.com/matthiasmullie/path-converter (should be cloned to `ZLIBS_ROOT_DIR/path-converter-master/`)

5.  **Visit the `POKEBS_ROOT_URL` in your browser and it should be working!**
>  This will be `http://localhost/pokebox.net/public_html/` unless you customized to something else.  Please let me know if there are any issues with these setup instructions and I'll update accordingly.  Thanks for your interest and enjoy!





