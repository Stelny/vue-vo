<script setup lang="ts">
    import UserCard from "./../UserCard/UserCard.vue"
    import { USERS } from "./../../../utils/data/user";
</script>
<template>
    <div class="dashboard-layout">
        <UserCard v-for="user in USERS" v-bind:key="user.id" :user="user" :active="false"/>
        <button class="settings">
            T
        </button>
    </div>
</template>
<style lang="scss">
    body {
        padding: 0;
        margin: 0;
        font-family: 'Inter', sans-serif;
    }
    * {
        box-sizing: border-box;
    }
    .dashboard-layout {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1rem;
        margin: 1rem;
    }
    .settings {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 100px;
        height: 100px;
        background: white;
        border: 5px solid $borderColor;
        border-radius: 50px;
        font-size: 70px;
        font-weight: 700;
        cursor: pointer;
    }
</style>
