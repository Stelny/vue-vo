<script setup lang="ts">
    import UserCard from "./../UserCard/UserCard.vue"
    import { USERS } from "./../../../utils/data/user";
    import { useTimeScreenStore } from "./../../../store/timeScreenStore";
import { storeToRefs } from "pinia";


    const timeScreenStore = useTimeScreenStore();

    const { users } = storeToRefs(timeScreenStore);



</script>
<template>
    <div class="dashboard-layout">
        <UserCard v-for="user in users" v-bind:key="user.id" :user="user" :active="false"/>
        <div class="settings">
            <button @click="timeScreenStore.addUser(USERS[Math.round(Math.random()*20)])">Načíst uživatele</button>
            <button @click="timeScreenStore.addList()">Načíst List</button>
        </div>
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
    button {
        font-family: inherit;
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
        background: white;
        border-radius: 18px;
        font-size: 70px;
        font-weight: 700;
        display: flex;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        left: 50%;
        bottom: 2rem;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        max-width: fit-content;
        button {
            margin: 0.5rem;
            background: rgb(229, 196, 49);
            border: 0;
            padding: 1rem 2rem;
            border-radius: 12px;
            color: white;
            font-size: 2rem;
            font-weight: bold;
            text-transform: uppercase;
            cursor: pointer;
            &:last-child {
                background:rgb(50, 196, 49); ;
            }
        }
    }
</style>
