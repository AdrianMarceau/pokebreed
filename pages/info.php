<div>
    <div class="group">
        <h2>What is PokéBox?</h2>
        <p>
            PokéBox is a browser-based simulator that revolves around the biomes, ecosystems,
            relationships, and lifecycles of Pokémon. The basic goal of the simulator is to encounter
            <em>all</em> the different species and forms of Pokémon using a only single box and a handful
            of starter Pokémon as seeds. Your starter Pokémon can be used to attract other similar species,
            and then those can be used to attract even more. Check your Pokédex after playing for a bit to
            see how many species you've registered so far!
        </p>
    </div>
    <div class="group modes">
        <h2>Available Play Modes</h2>
        <ul>
            <li><a<?= $is_free_mode || $allowed_generations !== $max_allowed_generations ? ' href="/"' : ' class="active"' ?>>Normal Mode</a> - Complete your Pokédex! Use starter Pokémon to attract new species, then chain to find them all! <em>(default)</em></li>
            <li><a<?= !$is_free_mode ? ' href="free-mode/"' : ' class="active"' ?>>Free Mode</a> - No Limits! Any basic Pokémon can be added to your box, but records are not saved.</li>
            <li class="gen-filters">
                <p style="margin-bottom: 4px;"><a>Filters</a> - Use the Normal Mode filters below if you only want to encounter Pokémon up to a certain generation:</p>
                <ul>
                    <li><a<?= $allowed_generations !== 1 ? ' href="gen1/"' : ' class="active"' ?>>Gen 1</a></li>
                    <li><a<?= $allowed_generations !== 2 ? ' href="gen2/"' : ' class="active"' ?>>Gen 2</a></li>
                    <li><a<?= $allowed_generations !== 3 ? ' href="gen3/"' : ' class="active"' ?>>Gen 3</a></li>
                    <li><a<?= $allowed_generations !== 4 ? ' href="gen4/"' : ' class="active"' ?>>Gen 4</a></li>
                    <li><a<?= $allowed_generations !== 5 ? ' href="gen5/"' : ' class="active"' ?>>Gen 5</a></li>
                    <li><a<?= $allowed_generations !== 6 ? ' href="gen6/"' : ' class="active"' ?>>Gen 6</a></li>
                    <li><a<?= $allowed_generations !== 7 ? ' href="gen7/"' : ' class="active"' ?>>Gen 7</a></li>
                    <li><a<?= $allowed_generations !== 8 ? ' href="gen8/"' : ' class="active"' ?>>Gen 8</a></li>
                    <li><a<?= $allowed_generations !== $max_allowed_generations ? ' href="/"' : ' class="active"' ?>>Gen X</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>