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
        <title>PokéBox | Pokémon Box Simulator | v<?= $version_number ?></title>
        <meta name="robots" content="index,follow" />
        <meta id="myViewport" name="viewport" content="width=device-width, initial-scale=1">
        <base href="<?= POKEBS_ROOT_URL ?>" />
        <link type="text/css" rel="stylesheet" href="styles/style-base.min.css?v<?= $version_number ?>" />
        <link type="text/css" rel="stylesheet" href="styles/jquery.scrollbar.min.css?v<?= $version_number ?>" />
        <!--  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous"> -->
        <link type="text/css" rel="stylesheet" href="styles/style-master.min.css?v<?= $version_number ?>" />
        <link type="text/css" rel="stylesheet" href="styles/style-responsive.min.css?v<?= $version_number ?>" />
        <link type="text/css" rel="stylesheet" href="styles/style-devices.min.css?v<?= $version_number ?>" />
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
    <body data-speed="normal">
        <div class="panel">

            <h1>
                <a class="logo" href="/"><img src="images/pokebox-logo.png" alt="PokéBox" /></a>
                <span class="subtext">Pokémon Box Simulator <img class="icon" src="images/favicon.png" /></span>
                <span class="version">
                    v<?= $version_number ?>
                    <span class="bp bp1"></span>
                    <span class="bp bp2"></span>
                    <span class="bp bp3"></span>
                    <span class="bp bp4"></span>
                </span>
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
                        <li class="day"><strong>Day</strong> <span class="data"></span></li>
                        <li class="capacity"><strong>Capacity</strong> <span class="data"></span></li>
                    </ul>
                </div>

                <div class="details pokemon">
                    <strong class="title">Current Pokémon</strong>
                    <div class="wrap">
                        <ul class="list slots"></ul>
                        <ul class="list pokemon"></ul>
                    </div>
                    <div class="field">
                        <span class="bg"></span>
                        <span class="tx"></span>
                    </div>
                </div>

            </div>

            <div class="midwrap">

                <div class="overview floatlist types hidden">
                    <div class="details stats">
                        <div class="title">
                            <strong class="main">Type Appeal</strong>
                        <div class="subs">
                            <strong class="sub attract">Attract</strong>
                            <strong class="sub repel">Repel</strong>
                        </div>
                        </div>
                        <div class="wrap">
                            <ul class="list attract"></ul>
                            <ul class="list repel"></ul>
                        </div>
                    </div>
                </div>

                <div class="overview floatlist species hidden">
                    <div class="title">
                        <strong class="main">Pokémon List</strong>
                        <div class="subs">
                            <strong class="sub current">Current <span class="count">0</span></strong>
                            <strong class="sub alltime">All-Time <span class="count">0</span></strong>
                        </div>
                    </div>
                    <div class="wrap">
                        <ul class="list current"></ul>
                        <ul class="list alltime"></ul>
                    </div>
                </div>

            </div>

            <div class="buttons">
                <div class="day-speed hidden">
                    <strong>Change Day Speed</strong>
                    <a class="option" data-speed="slow">Slow</a>
                    <a class="option" data-speed="normal">Normal</a>
                    <a class="option" data-speed="fast">Fast</a>
                    <a class="option" data-speed="pause">Pause</a>
                </div>
                <div class="new-pokemon">
                    <strong></strong>
                    <span class="loading">Loading</span>
                </div>
                <div class="fields">
                    <a class="field active"><img src="images/fields/forest.png" /></a>
                    <a class="field"><img src="images/fields/savanna.png" /></a>
                    <a class="field"><img src="images/fields/desert.png" /></a>
                    <a class="field"><img src="images/fields/beach.png" /></a>
                    <a class="field"><img src="images/fields/river.png" /></a>
                    <a class="field"><img src="images/fields/seafloor.png" /></a>
                    <a class="field"><img src="images/fields/cave.png" /></a>
                    <a class="field"><img src="images/fields/crag.png" /></a>
                    <a class="field"><img src="images/fields/volcano.png" /></a>
                    <a class="field"><img src="images/fields/snow.png" /></a>
                    <a class="field"><img src="images/fields/city.png" /></a>
                    <a class="field"><img src="images/fields/sky.png" /></a>
                    <a class="field"><img src="images/fields/space.png" /></a>
                </div>
                <div class="info links">
                    <a class="link" data-tab="about">about</a>
                    <a class="link" data-tab="help">help</a>
                    <a class="link" data-tab="credits">credits</a>
                    <a class="link reset hidden" onclick="javascript:PokeboxZoneFunctions.resetSimulation();">reset</a>
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
        <script type="text/javascript" src="scripts/jquery.scrollbar.min.js"></script>
        <script type="text/javascript" src="scripts/script.js?v<?= $version_number ?>"></script>
        <script type="text/javascript">

            // Define the global date and version number vars
            window.PokemonAppLastUpdated = '<?= $last_updated ?>';
            window.PokemonAppVersionNumber = '<?= $version_number ?>';
            window.PokemonAppDebugMode = <?= POKEBS_DEBUG_MODE === true ? 'true' : 'false' ?>;
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