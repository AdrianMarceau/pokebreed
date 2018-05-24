<div>
    <div class="group">
        <h2>PokéBox Pokédex</h2>
        <p>
            Complete your Pokédex by encountering different Pokemon in the simulator.  Use your existing species
            strategically and you should be able to lure in new ones, then from there use the new ones to attract
            even more! Eventually you've have encountered them all!
        </p>
    </div>
    <div class="group pokedex">
        <ul class="list"></ul>
        <div class="reset">
            <? if (!$is_free_mode){ ?>
                <p>(!) If you'd like to clear <strong>all saved Pokedex data</strong> and start over <strong>from scratch</strong>, please <a class="link reset_pokedex">click here</a>.</p>
            <? } else { ?>
                <p>(!) Pokédex data collected in Free Mode is <strong>temporary</strong> and will <strong>not</strong> be saved.</p>
            <? } ?>
        </div>
    </div>
</div>