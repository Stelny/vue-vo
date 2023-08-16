<script setup lang="ts">
import UserCardStripe from "./../../../components/atoms/UserCardStripe/UserCardStripe.vue"

import type { TUser } from "@/types/User";
import UserCardSelect from "./UserCardSelect.vue";
import UserCardTimer from "./UserCardTimer.vue";
import { useTimeScreenStore } from "./../../../store/timeScreenStore";

// props
const {
    user,
    active
} = defineProps<{
    user: TUser,
    active: boolean
}>()

const timeScreenStore = useTimeScreenStore();
// ref

// composables

// methods

// watch


</script>
<template>
    <div class="user-card" :class="{
        active: active
    }">
        <div class="user-card-top">
            <div class="user-card-top-name">
                {{ user.name  }} {{ user.surname  }} ({{ user.id  }})
            </div>
            <button class="user-card-top-close" @click="timeScreenStore.deleteUser(user.id)">
               <span></span>
               <span></span>
            </button>
        </div>
        <UserCardStripe :activity="user.activity"/>
        <div class="user-card-bottom"> 
            <UserCardSelect v-if="!user.activity" :user="user"/>
            <UserCardTimer v-if="user.activity" :activity="user.activity" :id_user="user.id"/>
        </div>
    </div>
</template>
<style lang="scss">
    .user-card {
        font-size: 2rem;
        border: 2px solid $borderColor;
        border-radius: .5rem;
        width: 100%;
        height: fit-content;
        position: relative;
        &.active {
            border: 3px solid rgb(253, 0, 0);
        
            &::after {
                content: "Vybraný uživatel";
                width: 100%;
                position: absolute;
                top: 0;
                font-size: 1rem;
                text-align: center;
                left: 50%;
                transform: translateX(-50%);
                background: red;
                max-width: fit-content;
                color: white;
                border-radius: 8px;
                padding: 0.5rem 1rem;
                top: -18px;
            }
        }
        
        &-top {
            display: flex;
            justify-content: space-between;
            padding: 1rem;
            align-items: center;
            &-name {
                font-weight: 600;
                font-size: 1.5rem;
            }
            &-close {
                background: none;
                display: flex;
                align-items: center;
                width: 30px;
                cursor: pointer;
                padding: 0;
                margin: 0;
                outline: none;
                box-shadow: none;
                border: none;
                height: 20px;
                flex-direction: column;
                position: relative;
                span {
                    display: flex;
                    width: 20px;
                    height: 2px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%) rotate(45deg);
                    background: red;
                    border-radius: 50px;
                    &:last-child {
                        transform: translate(-50%, -50%) rotate(135deg);
                    }
                }
            }
        }
    }
</style>
