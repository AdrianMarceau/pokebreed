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

// Define the seo index flag as true
$page_is_indexed = true;

// Check if we're in "Free Mode" or not
$is_free_mode = isset($_GET['freeMode']) && $_GET['freeMode'] === 'true' ? true : false;
if ($is_free_mode){ $page_is_indexed = false; }

// Collect the max generation number and make sure it doesn't go over
$max_allowed_generations = 9;
$allowed_generations = $max_allowed_generations;
if (isset($_GET['gen'])
    && is_numeric($_GET['gen'])){
    $allowed_generations = (int)($_GET['gen']);
    if ($allowed_generations < 1){ $allowed_generations = 1; }
    elseif ($allowed_generations > $max_allowed_generations){ $allowed_generations = $max_allowed_generations; }
}

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf8">
        <title>PokéBox <?= $is_free_mode ? '(Free Mode) ' : '' ?>| Pokémon Box Simulator | v<?= $version_number ?></title>
        <? if ($page_is_indexed){ ?>
            <meta name="robots" content="index,follow" />
        <? } else { ?>
            <meta name="robots" content="noindex,follow" />
        <? } ?>
        <meta name="keywords" content="pokemon, pokemon simulator, pokemon eggs, pokemon breeding, pokemon evolution, pokemon biomes, pokemon types, baby pokemon" />
        <meta name="description" content="PokéBox is a web-app that simulates the biomes, relationships, breeding, evolution, and life-cycles of every single official Pokémon and form (plus a few others).  Use type appeal to lure new and different species to your box on a quest to complete your Global Pokédex." />
        <meta id="myViewport" name="viewport" content="width=device-width, initial-scale=1">
        <base href="<?= POKEBS_ROOT_URL ?>" />
        <link type="text/css" rel="stylesheet" href="styles/style-base.min.css?v<?= $version_number ?>" />
        <link type="text/css" rel="stylesheet" href="styles/jquery.scrollbar.min.css?v<?= $version_number ?>" />
        <!--  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous"> -->
        <link type="text/css" rel="stylesheet" href="styles/style-master.min.css?v<?= $version_number ?>" />
        <link type="text/css" rel="stylesheet" href="styles/style-responsive.min.css?v<?= $version_number ?>" />
        <link type="text/css" rel="stylesheet" href="styles/style-devices.min.css?v<?= $version_number ?>" />
        <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico?v<?= $version_number ?>">
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
    <body data-speed="normal" data-mode="<?= $is_free_mode ? 'free' : 'normal' ?>">
        <div class="panel" data-view="simulator">

            <div class="banner">
                <div class="logo"><img src="images/pokebox-logo.png" alt="PokéBox" /></div>
                <div class="subtext"><h1>Pokémon Box Simulator<?= $is_free_mode ? ' <sup>(Free Mode)</sup>' : '' ?></h1></div>
                <div class="version">
                    v<?= $version_number ?>
                    <span class="bp bp1"></span>
                    <span class="bp bp2"></span>
                    <span class="bp bp3"></span>
                    <span class="bp bp4"></span>
                </div>
                <div class="counter pokedex" title="<?= !$is_free_mode
                    ? 'Current Pokédex Completion'
                    : 'Pokédex data is NOT saved in free mode!'
                    ?>">
                    <img class="icon" src="images/pokeball.png" data-kind="base" />
                    <span class="count">
                        <span class="current">0</span>
                        / <span class="total">0</span>
                        <span class="percent">0%</span>
                    </span>
                </div>
                <div class="counter timer" title="<?= !$is_free_mode
                    ? 'Total Days Passed'
                    : 'Counter data is NOT saved in free mode!'
                    ?>">
                    <span class="count"><span class="total">0</span></span>
                    <img class="icon" src="images/timer.png" />
                </div>
                <? if (!$is_free_mode){ ?>
                    <a class="delete_savedata" title="Delete All Save Data?"><i>&times;</i></a>
                <? } ?>
            </div>

            <div class="overview main">

                <div class="details zone">
                    <strong class="title">&nbsp;</strong>
                    <ul class="list hidden">
                        <li class="name"><strong>Biome</strong> <span class="data"></span></li>
                        <li class="day"><strong>Day</strong> <span class="data"></span></li>
                        <li class="date"><strong>Date</strong> <span class="data"></span></li>
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

                <div class="overview sublist visitors hidden">
                    <div class="details stats">
                        <div class="title">
                            <strong class="main">Lured Visitors</strong>
                        </div>
                        <div class="wrap">
                            <ul class="list">
                                <li class="species"><div class="bubble"></div></li>
                                <li class="species"><div class="bubble"></div></li>
                                <li class="species"><div class="bubble"></div></li>
                                <li class="species"><div class="bubble"></div></li>
                                <li class="species"><div class="bubble"></div></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="overview floatlist species hidden">
                    <div class="details stats">
                        <div class="title">
                            <strong class="main">Pokémon List</strong>
                            <div class="subs">
                                <strong class="sub alltime">All-Time <span class="count">0</span></strong>
                                <strong class="sub current">Current <span class="count">0</span></strong>
                            </div>
                        </div>
                        <div class="wrap">
                            <ul class="list alltime"></ul>
                            <ul class="list current"></ul>
                        </div>
                    </div>
                </div>

                <div class="overview floatlist types hidden">
                    <div class="details stats">
                        <div class="title">
                            <strong class="main">Type Appeal</strong>
                            <div class="delta">
                                <div>
                                    <span class="icon"><i class="d"></i><i class="z"></i></span>
                                    <span class="percent">0%</span>
                                </div>
                            </div>
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

            </div>

            <div class="buttons">
                <div class="controls">
                    <a class="control speed play hidden" data-control="play" title="Play">Play</a>
                    <a class="control speed pause hidden" data-control="pause" title="Pause">Pause</a>
                    <a class="control speed slow hidden" data-control="slow" title="Slow">Slow</a>
                    <a class="control speed fast hidden" data-control="fast" title="Fast">Fast</a>
                    <a class="control speed warp hidden" data-control="warp" title="Warp">Warp</a>
                    <a class="control restart hidden" data-control="restart"><span>Re-use Same Starters</span></a>
                    <a class="control new hidden" data-control="new"><span>Use New Starters</span></a>
                    <a class="control stop hidden" data-control="stop" title="Stop"><span>Stop?</span></a>
                    <a class="control start hidden" data-control="start" title="Start"><span>Start</span></a>
                </div>
                <div class="select-pokemon">
                    <span class="loading">Loading</span>
                </div>
                <div class="filter-pokemon hidden" data-target="buttons">
                    <div class="wrap">
                        <div class="title">Filters</div>
                        <? if ($allowed_generations > 1){ ?>
                            <div class="filter generations" data-filter="gen" data-max="<?= $allowed_generations ?>">
                                <label class="label">Gen</label>
                                <div class="options" data-count="<?= $allowed_generations + 1 ?>">
                                    <a class="option" data-gen="all">All</a>
                                    <? for ($gen = 1; $gen <= $allowed_generations; $gen++){ ?>
                                        <? if ($gen === $max_allowed_generations){ break; } ?>
                                        <a class="option" data-gen="<?= $gen ?>"><?= ucfirst($gen) ?></a>
                                    <? } ?>
                                    <a class="option" data-gen="x">X</a>
                                </div>
                            </div>
                        <? } ?>
                        <div class="filter types" data-filter="type">
                            <label class="label">Type</label>
                            <div class="options">
                                <a class="option" data-type="all">All</a>
                                <a class="option" data-type="normal"><img src="images/icons/types/normal.png" alt="Normal" /></a>
                                <a class="option" data-type="fighting"><img src="images/icons/types/fighting.png" alt="Fighting" /></a>
                                <a class="option" data-type="flying"><img src="images/icons/types/flying.png" alt="Flying" /></a>
                                <a class="option" data-type="poison"><img src="images/icons/types/poison.png" alt="Poison" /></a>
                                <a class="option" data-type="ground"><img src="images/icons/types/ground.png" alt="Ground" /></a>
                                <a class="option" data-type="rock"><img src="images/icons/types/rock.png" alt="Rock" /></a>
                                <a class="option" data-type="bug"><img src="images/icons/types/bug.png" alt="Bug" /></a>
                                <a class="option" data-type="ghost"><img src="images/icons/types/ghost.png" alt="Ghost" /></a>
                                <a class="option" data-type="steel"><img src="images/icons/types/steel.png" alt="Steel" /></a>
                                <a class="option" data-type="fire"><img src="images/icons/types/fire.png" alt="Fire" /></a>
                                <a class="option" data-type="water"><img src="images/icons/types/water.png" alt="Water" /></a>
                                <a class="option" data-type="grass"><img src="images/icons/types/grass.png" alt="Grass" /></a>
                                <a class="option" data-type="electric"><img src="images/icons/types/electric.png" alt="Electric" /></a>
                                <a class="option" data-type="psychic"><img src="images/icons/types/psychic.png" alt="Psychic" /></a>
                                <a class="option" data-type="ice"><img src="images/icons/types/ice.png" alt="Ice" /></a>
                                <a class="option" data-type="dragon"><img src="images/icons/types/dragon.png" alt="Dragon" /></a>
                                <a class="option" data-type="dark"><img src="images/icons/types/dark.png" alt="Dark" /></a>
                                <a class="option" data-type="fairy"><img src="images/icons/types/fairy.png" alt="Fairy" /></a>
                            </div>
                        </div>
                        <div class="more">
                            <a class="button add-ditto hidden" title="Add a Ditto"><span>Add Ditto</span></a>
                            <a class="button enter-seed" title="Enter Starter Seed"><span>Enter Seed</span></a>
                        </div>
                    </div>
                </div>
                <div class="starter-pokemon hidden">
                    <div class="wrap">
                        <p class="seed">&hellip;</p>
                    </div>
                </div>
                <div class="info links">
                    <a class="link" data-tab="info">info</a>
                    <a class="link" data-tab="help">help</a>
                    <a class="link" data-tab="credits">credits</a>
                    <a class="link" data-tab="privacy">privacy</a>
                    <a class="link icon reddit" href="https://www.reddit.com/r/pokebox/" target="_blank" title="Check out our Subreddit!"><span>reddit</span></a>
                    <a class="link icon discord" href="https://discord.gg/8jsSYt5" target="_blank" title="Join us on Discord!"><span>discord</span></a>
                    <a class="link pokedex hidden wait" data-tab="pokedex"><span>pokédex</span><span>&hellip;</span></a>
                    <? if ($is_free_mode){ ?>
                        <a class="link mode" href="/"><span>&laquo; normal mode</span></a>
                    <? } ?>
                </div>
                <div class="info hidden" data-tab="info">
                    <? require('pages/info.php'); ?>
                </div>
                <div class="info hidden" data-tab="help">
                    <? require('pages/help.php'); ?>
                </div>
                <div class="info hidden" data-tab="credits">
                    <? require('pages/credits.php'); ?>
                </div>
                <div class="info hidden" data-tab="privacy">
                    <? require('pages/privacy.php'); ?>
                </div>
                <div class="info hidden" data-tab="pokedex">
                    <? require('pages/pokedex.php'); ?>
                </div>
            </div>

        </div>
        <script type="text/javascript" src="scripts/jquery-3.3.1.min.js"></script>
        <script type="text/javascript" src="scripts/jquery.scrollbar.min.js"></script>
        <script type="text/javascript" src="scripts/polyfill.localstorage.js"></script>
        <script type="text/javascript" src="scripts/script.js?v<?= $version_number ?>"></script>
        <script type="text/javascript">

            // Define the global date and version number vars
            window.PokemonAppLastUpdated = '<?= $last_updated ?>';
            window.PokemonAppVersionNumber = '<?= $version_number ?>';
            window.PokemonAppDebugMode = <?= POKEBS_DEBUG_MODE === true ? 'true' : 'false' ?>;
            window.PokemonAppFreeMode = <?= isset($_GET['freeMode']) && $_GET['freeMode'] === 'true' ? 'true' : 'false' ?>;
            window.PokemonAppBaseHref = '<?= POKEBS_ROOT_URL ?>';
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