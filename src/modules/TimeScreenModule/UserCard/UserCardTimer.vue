<script setup lang="ts">
import useTimer from "./../../../composables/useTimer"
import { TActivity } from "@/types/Activity";
import { formatSecondsToMinutesAndSeconds } from "./../../../utils/format/time"
import { useTimeScreenStore } from "./../../../store/timeScreenStore";

const {
    activity,
    id_user
} = defineProps<{
    activity: TActivity,
    id_user: string
}>()

const timeScreenStore = useTimeScreenStore();


const { countdown } = useTimer(
    {
        startTime: activity.startDate
    }
);

</script>
<template>
    <div class="user-card-timer">
        <span>
            {{ formatSecondsToMinutesAndSeconds(countdown)  }}
        </span>
        <button @click="timeScreenStore.completeActivity(id_user)">Dokončit</button>
    </div>
</template>
<style lang="scss">
    .user-card {
        &-timer {
            padding: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-weight: bold;
            display: flex;
            flex-direction: column;
            padding-bottom: 1rem;
            button {
                background: #0f9d20;
                color: white;
                width: 100%;
                padding: 1rem 1rem;
                font-size: 1rem;
                font-family: inherit;
                text-transform: uppercase;
                font-weight: 700;
                cursor: pointer;
                border: none;
                border-radius: 6px;
                margin-top: 1rem;
            }
        }
    }
</style>