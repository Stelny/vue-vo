<script setup lang="ts">
import type { TUser } from "@/types/User";

import { ACTIVITY_TYPES } from "./../../../utils/data/activity";
import { useTimeScreenStore } from "./../../../store/timeScreenStore";

const {
    user
} = defineProps<{
    user: TUser
}>()

const timeScreenStore = useTimeScreenStore();



</script>
<template>
    <div class="user-card-select">
        <div class="user-card-item scan">
            <img src="./../../../assets/images/barcode.png" alt="Barcode" />
            Čekání na scan
        </div>
        <button class="user-card-item type" v-for="activityType in ACTIVITY_TYPES" v-bind:key="activityType.type" @click="timeScreenStore.addActivity(activityType.type, user.id)" :style="{
            background: activityType.hex
        }">
            {{ activityType.name }}
        </button>
    </div>
</template>
<style lang="scss">
.user-card {
    &-select {
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }
    &-item {
        margin-bottom: .5rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 12px;
        &:last-child {
            margin: 0;
        }
        &.scan {
            font-size: 1.5rem;
            text-transform: uppercase;
            font-weight: bold;
            border: 1px solid #d1d1d1;
            border-radius: 12px;
            img {   
                max-width: 50%;
            }
        }
        &.type {
            padding: 2rem;
            background: none;
            color: white;
            font-size: 1.5rem;
            font-weight: 700;
            text-transform: uppercase;
            border: none;
            cursor: pointer;
        }
    }
}
</style>