<template>
    <div class="bg-danger flex flex-col justify-center items-center">
        <img src="../../public/teamRocket404.png" alt="404" id="erreurImg" class="m-auto block">
        <div class="flex-1">
            <h3 class="text-center"><span>The rocket team</span> has won this time.</h3>
            <router-link to="/" id="btn">Retour</router-link>
        </div>
    </div>
</template>
<style scoped lang="sass">
div
    position: absolute
    top: 0px
    left: 0px
    width: 100vw
    height: 100vh
    #erreurImg
        max-width: 70vw
    span
        color: white

</style>