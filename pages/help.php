<div>
    <div class="group">
        <h2>Basic Mechanics</h2>
        <p>Add up to 10 different Pokémon to the zone and then watch as they grow, evolve, multiply, and eventually faint leaving their offspring to continue the cycle.</p>
        <p>The kinds of Pokémon you add to a zone can alter it's appeal to other species and can either positively or negatively affect their growth and breeding behaviors over time.</p>
        <p>Pokémon will typically only breed with their own species, but adding a single Ditto to your zone at the beginning can give every species a head-start on egg production.</p>
    </div>
    <div class="group">
        <h2>Advanced Mechanics</h2>
        <div class="group">
            <h3>Type Appeal</h2>
            <p>
                Each species added or born into a zone contributes to the global Type Appeal values in some way.
                Fire types, for example, make an area more appealing to other Fire types...  but they also make it <em>less</em> appealing to Bug, Grass, and Steel types.
                Some Pokémon have more types than others and some Pokémon have more influence than others, but the base mechanics are the same for every species added to a zone.
                Of note - evolved, legendary, and otherwise special Pokémon have more influence than others.
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
                Simply putting Pokémon into a zone will cause most of them to grow and eventually evolve naturally, but some Pokémon require specific conditions to reach their next stage of development.
            </p>
            <p>
                In the main-series games, these evolutions are triggered by things like items, trading with friends, or leveling up in a certain location.
                In the simulator these evolutions are triggered differently, oftentimes relying on the current appeal value of a given type, the amount of family members on the field, or some other fluctuating stat.
            </p>
            <ul>
                <li>Level-up evolutions trigger naturally and are based on a Pokémon's growth level (1-to-1 with official sources)</li>
                <li>Happiness-based evolutions trigger at growth level 10 when the appeal value matching either of a Pokémon's types is high</li>
                <li>Sadness-based evolutions trigger at growth level 10 when the appeal value matching either of a Pokémon's types is low **</li>
                <li>Affection-based evolutions trigger at growth level 20 when the number of related* Pokémon on the field is high</li>
                <li>Loneliness-based evolutions trigger at growth level 20 when the number of related* Pokémon on the field is low **</li>
                <li>Type-appeal based evolutions trigger when the given type is either high or very high (depending on the Pokémon) **</li>
                <li>Type-warning based evolutions trigger when the given type is either low or very low (depending on the Pokémon) **</li>
                <li>Stone, item, and location-based evolutions trigger automatically at growth level 20, but often rely on a secondary qualifier (like type appeal)</li>
                <li>Trade-based evolutions trigger at growth level 30 as long as current number of Pokémon on the field matching this one's species is even-numbered</li>
                <li>Extinction-based evolutions trigger at growth level 30 when this Pokémon is the last active member of its family and species **</li>
                <li>Burst evolutions trigger automatically at the end of a Pokémon's life-cycle before they faint, but often rely on a secondary qualifier (like extinction) **</li>
                <li>Mega evolutions trigger automatically at the end of a Pokémon's life-cycle before they faint, using appeal values to decide priority when multiple options exist</li>
            </ul>
            <p>
                <em>* Related Pokémon refer to any other Pokémon on the field that are in this one's evolution chain(s)</em><br />
                <em>** These methods are not official and do not appear in any main-series games (they were made-up for the simulator)</em>
            </p>
        </div>
        <div class="group">
            <h3>Life-cycles and Breeding</h3>
            <p>Each species of Pokémon has a calculated amount of Life Points and Breed Points based on their stats in the main-series games. Pokémon with higher Life Points last longer but Pokémon with higher Breed Points are the first to lay eggs when space opens up, so the population and diversity of a given zone can change dramatically, even in just a few in-game months.</p>
            <p>Life Points are based on a Pokémon's combined HP, Defense, and Special Defense while a Pokémon's Breed Points are based on a Pokémon's Speed, Attack, and Special Attack.  Naturally, the Pokémon with the highest base stats from the games (fully-evolved, legendary, mega evolutions, etc.) have the best chance of proliferation in the simulator.</li>
            <p>Once a Pokémon has reached the end of its life-cycle, it enters a final burn-out phase where it loses 10% of its energy each day until it eventually faints.  Pokémon that are fainting will appear with a red background and once the counter reaches zero they are removed from view.  If a given Pokémon has a Mega or Burst evolution, it will trigger in this state.</p>
        </div>
    </div>
</div>