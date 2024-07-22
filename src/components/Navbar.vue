<template>
    <nav>
        <h3>eSPort</h3>
        <div>
            <router-link :to="{name: 'accueil'}">Accueil</router-link>
            <router-link :to="{name: 'equipes'}">Equipes</router-link>
        </div>
    </nav>
</template>

<script>
    export default{

    }

</script>

<style>
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: black;
    }
    a{
        text-decoration: none;
        padding: 10px;
        color: white;
        
    }
    h3{
        color: white;
        padding: 10px;
    }
</style>