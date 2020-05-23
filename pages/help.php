<div>
    <div class="group">
        <h2>Basic Mechanics</h2>
        <p>
            Add up to 10 different Pokémon to your box and then press play.  Watch as they grow, evolve,
            multiply, and eventually die leaving their offspring to continue the cycle. The kinds of Pokémon
            you add to a box can alter its appeal to other species and can greatly affect its resident's growth
            and breeding behaviours over time.  Whenever you're ready, STOP the simulator then try a different
            combination of starter Pokémon.
        </p>
        <p>
            The basic goal of the simulator is to encounter <em>all</em> the different species and forms
            of Pokémon using a single box and only a handful of starter Pokémon as seeds. Your starter Pokémon
            can be used to attract other similar species, and then those can be used to attract even more.
            Check your Pokédex after playing for a bit to see how many species you've registered so far!
        </p>
    </div>
    <div class="group">
        <h2>Advanced Mechanics</h2>
        <div class="group">
            <h3>Type Appeal</h2>
            <p>
                Each species that lives in your box contributes to the global Type Appeal values in some way.
                Fire types, for example, attract other Fire types...  but they also <em>repel</em> Bug, Grass, and Steel types due to their type-advantage over them.
                Likewise because Fire types are weak to Water attacks themselves, they may inadvertently attract Water type Pokémon to the box as well.
                All basic Pokémon influence a box's appeal values but fully-evolved and special or legendary Pokémon influence it a bit more.
            </p>
            <p>
                Type Appeal values affect many things, but the most notable are evolutions and breeding.
                Some Pokémon may find a certain type more or less appealing, and may either evolve into or produce offspring with a new typing to compensate.
                If the appeal values are just-right, Pikachu can evolve into Psychic types, Ninetales can give birth to Ice types, and Gloom can decide to shed their Poison type to become pure Grass.
            </p>
        </div>
        <div class="group">
            <h3>Evolution Mechanics</h3>
            <p>
                Most Pokémon grow and eventually evolve on their own, but some require very specific conditions to reach their next stage of development.
            </p>
            <ul>
                <li>Level-up evolutions trigger naturally when a Pokémon reaches a certain growth level</li>
                <li>Happiness evolutions trigger when a Pokémon's favourite type(s) have high appeal</li>
                <li>Affection evolutions trigger when a Pokémon is surrounded a lot of family</li>
                <li>Type-appeal evolutions trigger when an elemental type has very high appeal</li>
                <li>Burst and Mega evolutions trigger when a Pokémon has reached the end of its life</li>
                <li>Other more obscure methods of evolution may exist as well...</li>
            </ul>
        </div>
    </div>
    <div class="group">
        <h2>Legacy Save Data</h2>
        <p>
            <? $migrate_url = str_replace('https://', 'http://', POKEBS_ROOT_URL).'migrate.php'; ?>
            If you used PokéBox before it was upgraded to use SSL and be more secure, your
            old save data will not be seen by the current version of the app. Please use the
            dedicated <a href="<?= $migrate_url ?>">migration page</a> to push
            your data up into the cloud and then come back here to pull it back down again.
            Apologies for the inconvenience but thank you for your understanding.
        </p>
    </div>
    <div class="group hotkeys">
        <h2>Keyboard Controls</h2>
        <div>
            <h3>During Starter Selection</h3>
            <ul>
                <li>On the starter selection screen, use <span class="key">[TAB]</span> and the <span class="key">[ARROW KEYS]</span> to navigate</li>
                <li><span class="key">[TAB]</span> shifts focus from one panel to another (starters, gen filters, then type filters)</li>
                <li>Starter Panel: Use all four <span class="key">[ARROW KEYS]</span> to navigate buttons, <span class="key">[SPACEBAR]</span> to select a Pokémon as a starter</li>
                <li>Filter Panels: Use <span class="key">[LEFT ARROW]</span> and <span class="key">[RIGHT ARROW]</span> to navigate filters, <span class="key">[UP ARROW]</span> and <span class="key">[DOWN ARROW]</span> to jump to first/last option</li>
                <li><span class="key">[S]</span> can be used to bring up the seed / starter prompt (type a name or fragment and hit <span class="key">[ENTER]</span>)</li>
                <li><span class="key">[R]</span> can be used to repeat the most recently used starter seed (assuming one exists)</li>
                <li><span class="key">[D]</span> can be used to add a Ditto (once unlocked)</li>
                <li><span class="key">[SHIFT] + [D]</span> can be used to a add Super Ditto (once unlocked)</li>
                <li><span class="key">[A]</span> can be used to add Arceus (once unlocked)</li>
                <li><span class="key">[BACKSPACE]</span> removes last-added starter Pokémon, can be used repeatedly</li>
                <li><span class="key">[ENTER]</span> starts the simulation with the selected starter Pokémon</li>
            </ul>
        </div>
        <div>
            <h3>While Simulation is Running</h3>
            <ul>
                <li><span class="key">[SPACEBAR]</span> or <span class="key">[ENTER]</span> pauses and unpauses the simulation</li>
                <li><span class="key">[ESC]</span> or <span class="key">[BACKSPACE]</span> stops and then ends the simulation</li>
                <li><span class="key">[RIGHT ARROW]</span> can be used to speed up the simulation</li>
                <li><span class="key">[LEFT ARROW]</span> can be used to slow down the simulation</li>
            </ul>
        </div>
        <div>
            <h3>After Simulation has Ended</h3>
            <ul>
                <li><span class="key">[LEFT ARROW]</span> continues to the selection screen w/ same starters</li>
                <li><span class="key">[RIGHT ARROW]</span> or <span class="key">[BACKSPACE]</span> or <span class="key">[ENTER]</span> continues to selection screen w/ new starters</li>
            </ul>
        </div>
        <div>
            <h3>Other Shortcuts</h3>
            <ul>
                <li><span class="key">[~]</span> key can be used to autoscroll to main overview area</li>
                <li><span class="key">[SPACEBAR]</span> or <span class="key">[ENTER]</span> can be used to dismiss popup messages</li>
                <li>Pokédex cannot be navigated by keyboard yet (sorry)</li>
            </ul>
        </div>
    </div>
    <div class="group">
        <h2>Need More Help?</h2>
        <p>
            If you have any questions or feedback about the simulator at all, please
            <a href="https://discord.gg/8jsSYt5" target="_blank">join us on Discord</a>
            and let us know your thoughts.  We look forward to hearing from you!
        </p>
    </div>
</div>