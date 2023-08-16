<script setup lang="ts">
import useTimer from "./../../../composables/useTimer"
import { TActivity } from "@/types/Activity";
import { formatSecondsToMinutesAndSeconds } from "./../../../utils/format/time"

const {
    activity
} = defineProps<{
    activity: TActivity
}>()

const { countdown } = useTimer(
    {
        startTime: activity.startDate
    }
);

</script>
<template>
    <div class="user-card-timer">
        <div class="">
            {{ formatSecondsToMinutesAndSeconds(countdown)  }}
        </div>
    </div>
</template>
<style lang="scss">

</style>