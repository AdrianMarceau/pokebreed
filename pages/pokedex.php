<div>
    <div class="group pokedex">
        <h2>Global Pokédex</h2>
        <div class="filter-pokemon hidden" data-target="pokedex">
            <div class="wrap">
                <div class="title">Filters</div>
                <div class="filter generations" data-filter="gen" data-max="<?= $allowed_generations ?>">
                    <label class="label">Gen</label>
                    <div class="options">
                        <a class="option" data-gen="all">All</a>
                        <? for ($gen = 1; $gen <= $allowed_generations; $gen++){ ?>
                            <? $genx = $gen === 8 ? 'x' : $gen; ?>
                            <a class="option" data-gen="<?= $genx ?>"><?= ucfirst($genx) ?></a>
                        <? } ?>
                    </div>
                </div>
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
            </div>
        </div>
        <ul class="list"></ul>
        <div class="totals">
            <span class="unlocked">0</span>
            <span class="showing">0</span>
            <span class="percent">0%</span>
        </div>
    </div>
</div>