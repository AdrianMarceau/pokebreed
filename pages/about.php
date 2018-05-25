<div>
    <div class="group">
        <h2>What is the PokéBox Simulator?</h2>
        <p>
            PokéBox is a browser-based simulator / game that revolves around the biomes, ecosystems,
            relationships, and lifecycles of Pokémon. The basic goal of the simulator is to encounter
            <em>all</em> the different species and forms of Pokémon using a only single box and a handful
            of starter Pokémon as seeds. Your starter Pokémon can be used to attract other similar species,
            and then those can be used to attract even more. Check your Pokédex after playing for a bit to
            see how many species you've registered so far!
        </p>
    </div>
    <div class="group">
        <h2>Available Modes</h2>
        <ul>
            <li><a<?= $is_free_mode ? ' href="/"' : ' class="active"' ?>>Normal Mode</a> - Complete your Pokédex! Use starter Pokémon to attract new species, then chain to find them all!</li>
            <li><a<?= !$is_free_mode ? ' href="free-mode/"' : ' class="active"' ?>>Free Mode</a> - No Limits! Any basic Pokémon can be added to your box, but records are not saved.</li>
        </ul>
    </div>
</div>