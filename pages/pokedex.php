<div>
    <div class="group pokedex">
        <h2>Global Pokédex</h2>
        <div class="filter-pokemon hidden" data-target="pokedex">
            <div class="wrap">
                <div class="title">Filters</div>
                <? if ($allowed_generations > 1){ ?>
                    <div class="filter generations" data-filter="gen" data-max="<?= $allowed_generations ?>">
                        <label class="label">Gen</label>
                        <div class="options">
                            <? /* <a class="option" data-gen="all">All</a> */ ?>
                            <? for ($gen = 1; $gen <= $allowed_generations; $gen++){ ?>
                                <? $genx = $gen === $max_allowed_generations ? 'x' : $gen; ?>
                                <a class="option" data-gen="<?= $genx ?>"><?= ucfirst($genx) ?></a>
                            <? } ?>
                        </div>
                    </div>
                <? } ?>
                <div class="filter types" data-filter="type">
                    <label class="label">Type</label>
                    <div class="options"></div>
                </div>
            </div>
        </div>
        <ul class="list"></ul>
        <? if ($allowed_generations > 1){ ?>
            <div class="filter-pokemon lower hidden" data-target="pokedex">
                <div class="wrap">
                    <div class="filter modes" data-filter="mode">
                        <label class="label">Mode</label>
                        <div class="options">
                            <a class="option" data-mode="legacy">Legacy</a>
                            <a class="option" data-mode="modern">Modern</a>
                        </div>
                    </div>
                </div>
            </div>
        <? } ?>
        <div class="totals">
            <span class="unlocked">0</span>
            <span class="showing">0</span>
            <span class="percent">0%</span>
        </div>
    </div>
</div>