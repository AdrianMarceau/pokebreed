<?

/*
 * POKEMON BREEDING SIMULATOR
 * This is a breeding and life-cycle simulator for Pokemon.
 * In short, you select a few base species to put into the
 * virtual box and then watch them grow, evolve, multiply,
 * and eventually die. Each Pokemon added to the box either
 * increases or decreases the appeal of certain other types
 * based on their own influence and their species' strengths,
 * weaknesses, and base types.  Appeal values affect how the
 * other Pokemon grow and evolve and the cycle continues on
 * until everyone dies (if ever).
 */

// Require the global config file
require('config.php');

// Collect the max generation number and make sure it doesn't go over
$allowed_generations = 8;
if (isset($_GET['gen'])
    && is_numeric($_GET['gen'])){
    $allowed_generations = (int)($_GET['gen']);
    if ($allowed_generations < 1){ $allowed_generations = 1; }
    elseif ($allowed_generations > 8){ $allowed_generations = 8; }
}

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf8">
        <title>PokéBox Breeding Simulator v<?= $version_number ?></title>
        <meta name="robots" content="index,follow" />
        <meta id="myViewport" name="viewport" content="width=device-width, initial-scale=1">
        <base href="<?= POKEBS_ROOT_URL ?>" />
        <link type="text/css" rel="stylesheet" href="styles/style.css?v<?= $version_number ?>" />
        <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
        <? if (!$is_local && GA_ACCOUNT_ID){ ?>
        <!-- Google Analytics -->
        <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', '<?= GA_ACCOUNT_ID ?>', 'auto');
        ga('send', 'pageview');
        </script>
        <? } ?>
    </head>
    <body>
        <div class="panel">

            <h1>
                <a class="logo" href="/"><img src="images/pokebox-logo.png" alt="PokéBox" /></a>
                <span class="subtext">Breeding Simulator <img class="icon" src="images/favicon.png" /></span>
                <span class="version">v<?= $version_number ?></span>
            </h1>

            <div class="overview main">

                <div class="details zone">
                    <strong class="title">Box Details</strong>
                    <div class="timer">
                        <div class="total">
                            <div class="complete" style="width: 0%"></div>
                        </div>
                    </div>
                    <ul class="list">
                        <li class="name"><strong>Name</strong> <span class="data"></span></li>
                        <li class="size"><strong>Size</strong> <span class="data"></span></li>
                        <li class="capacity"><strong>Capacity</strong> <span class="data"></span></li>
                        <li class="diversity"><strong>Diversity</strong> <span class="data"></span></li>
                        <li class="day"><strong>Day</strong> <span class="data"></span></li>
                    </ul>
                </div>

                <div class="details pokemon">
                    <strong class="title">Current Pokémon</strong>
                    <div class="wrap">
                        <ul class="list slots"></ul>
                        <ul class="list pokemon"></ul>
                    </div>
                </div>

            </div>

            <div class="midwrap">

                <div class="overview types hidden">
                    <div class="details stats">
                        <div class="title">
                            <strong class="main">Type Appeal</strong>
                        <div class="subs">
                            <strong class="sub">Positive</strong>
                            <strong class="sub">Negative</strong>
                        </div>
                        </div>
                        <div class="wrap">
                            <ul class="list positive"></ul>
                            <ul class="list negative"></ul>
                        </div>
                    </div>
                </div>

                <div class="overview species hidden">
                    <div class="title">
                        <strong class="main">Species List</strong>
                        <div class="subs">
                            <strong class="sub">Active</strong>
                            <strong class="sub">Fainted</strong>
                        </div>
                    </div>
                    <div class="wrap">
                        <ul class="list active"></ul>
                        <ul class="list fainted"></ul>
                    </div>
                </div>

            </div>

            <div class="buttons">
                <div class="day-speed hidden">
                    <strong>Change Day Speed</strong>
                    <a class="option" data-speed="5000">Slow</a>
                    <a class="option" data-speed="1000">Medium</a>
                    <a class="option" data-speed="500">Fast</a>
                </div>
                <div class="new-pokemon">
                    <strong></strong>
                    <span class="loading">Loading</span>
                </div>
                <div class="fields">
                    <a class="field active"><img src="images/fields/forest.png" /></a>
                    <a class="field"><img src="images/fields/beach.png" /></a>
                    <a class="field"><img src="images/fields/cave.png" /></a>
                    <a class="field"><img src="images/fields/city.png" /></a>
                    <a class="field"><img src="images/fields/crag.png" /></a>
                    <a class="field"><img src="images/fields/desert.png" /></a>
                    <a class="field"><img src="images/fields/river.png" /></a>
                    <a class="field"><img src="images/fields/savanna.png" /></a>
                    <a class="field"><img src="images/fields/seafloor.png" /></a>
                    <!-- <a class="field"><img src="images/fields/sky.png" /></a> -->
                    <a class="field"><img src="images/fields/snow.png" /></a>
                    <!-- <a class="field"><img src="images/fields/space.png" /></a> -->
                    <a class="field"><img src="images/fields/volcano.png" /></a>
                </div>
                <div class="info links">
                    <a class="link" data-tab="about">about</a>
                    <a class="link" data-tab="help">help</a>
                    <a class="link" data-tab="credits">credits</a>
                </div>
                <div class="info hidden" data-tab="about">
                    <? require('pages/about.php'); ?>
                </div>
                <div class="info hidden" data-tab="help">
                    <? require('pages/help.php'); ?>
                </div>
                <div class="info hidden" data-tab="credits">
                    <? require('pages/credits.php'); ?>
                </div>
            </div>

        </div>
        <script type="text/javascript" src="scripts/jquery-3.3.1.min.js"></script>
        <script type="text/javascript" src="scripts/detect-zoom.min.js"></script>
        <script type="text/javascript" src="scripts/script.js?v<?= $version_number ?>"></script>
        <script type="text/javascript">

            // Define the global date and version number vars
            window.PokemonAppLastUpdated = '<?= $last_updated ?>';
            window.PokemonAppVersionNumber = '<?= $version_number ?>';
            window.PokemonAllowedGenerationsMax = <?= $allowed_generations ?>;

        </script>
        <? if (!$is_local && GA_ACCOUNT_ID){ ?>
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=<?= GA_ACCOUNT_ID ?>"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '<?= GA_ACCOUNT_ID ?>');
            </script>
        <? } ?>
    </body>
</html>