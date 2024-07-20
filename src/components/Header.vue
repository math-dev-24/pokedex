<template>
    <header class="bg-third flex">
        <div class="flex-1">
            <img src="../../public/pokemon.svg" alt="pokemonIco" class="mx-4 my-4"/>
        </div>
        <nav>
            <ul class="flex">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/pokemons">Pokédex</router-link></li>
                <li><router-link to="/documentation">Documentation</router-link></li>
            </ul>
        </nav>
    </header>
</template>