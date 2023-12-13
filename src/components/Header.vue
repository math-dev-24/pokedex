<template>
    <header class="bg-third w-full py-6 flex shad-1">
        <div class="flex-1 px-14">
            <img src="../../public/pokemon.svg" alt="pokemonIco">
        </div>
        <nav>
            <ul class="flex gap-14 px-8 mr-14 h-full">
                <router-link to="/">Home</router-link>
                <router-link to="/pokemons">Pokédex</router-link>
                <router-link to="/documentation">Documentation</router-link>
            </ul>
        </nav>
    </header>
</template>
<style lang="sass" scoped>
header
    img
        width: 120px
    ul a
        font-size: 25px
.router-link-active
    position: relative
    &::after
        content: ""
        width: 80%
        height: 2px
        background: black
        position: absolute
        bottom: 5px
        left: 10%

</style>