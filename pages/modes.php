<div>
    <div class="group modes">
        <h2>Available Modes</h2>
        <ul>
            <li><a<?= $is_free_mode || $allowed_generations !== 8 ? ' href="/"' : ' class="active"' ?>>Normal Mode</a> - Complete your Pokédex! Use starter Pokémon to attract new species, then chain to find them all!</li>
            <li><a<?= !$is_free_mode ? ' href="free-mode/"' : ' class="active"' ?>>Free Mode</a> - No Limits! Any basic Pokémon can be added to your box, but records are not saved.</li>
            <li class="gen-filters">
                <a>Filters</a> - Use the Normal Mode filters below if you only want to encounter Pokémon up to a certain generation:
                <ul>
                    <li><a<?= $allowed_generations !== 1 ? ' href="gen1/"' : ' class="active"' ?>>Gen 1</a></li>
                    <li><a<?= $allowed_generations !== 2 ? ' href="gen2/"' : ' class="active"' ?>>Gen 2</a></li>
                    <li><a<?= $allowed_generations !== 3 ? ' href="gen3/"' : ' class="active"' ?>>Gen 3</a></li>
                    <li><a<?= $allowed_generations !== 4 ? ' href="gen4/"' : ' class="active"' ?>>Gen 4</a></li>
                    <li><a<?= $allowed_generations !== 5 ? ' href="gen5/"' : ' class="active"' ?>>Gen 5</a></li>
                    <li><a<?= $allowed_generations !== 6 ? ' href="gen6/"' : ' class="active"' ?>>Gen 6</a></li>
                    <li><a<?= $allowed_generations !== 7 ? ' href="gen7/"' : ' class="active"' ?>>Gen 7</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>