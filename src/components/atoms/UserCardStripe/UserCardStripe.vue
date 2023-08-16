<script setup lang="ts">
import { computed } from "vue";
import { formatTime } from "./../../../utils/format/time";
import { EActivityType, TActivity } from "./../../../types/Activity";

const props = defineProps<{
    activity?: TActivity
}>()


const activityName = computed(() => {
    if (props.activity?.activityType === EActivityType.BREAK) return "Pauza"
    if (props.activity?.activityType === EActivityType.CLEANING) return "Úklid"
    return "Zakázkový list č.";
})

</script>
<template>
    <div class="user-card-stripe" :class="{
        isActivity: props.activity
    }"
    >
        <template v-if="props.activity">
            <div class="user-card-stripe-name">
                {{ activityName }} <b>{{ activity?.orderSheet?.id }}</b>
            </div>
            <div class="user-card-stripe-start">
                od {{ formatTime(props.activity.startDate) }}
            </div>
        </template>
        <template v-else>
            <div class="user-card-stripe-none">
                Vyberte činnost nebo načtěte list
            </div>
        </template>
    </div>
</template>
<style lang="scss">
.user-card {
    &-stripe {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 1rem;
        background: #d1d1d1;
        &.isActivity {
            background: rgba($red, 0.25);
        }
        &-name {
            font-size: 1rem;
        }
        &-start {
            font-size: 1rem;
        }
        &-none {
            width: 100%;
            text-align: center;
            font-size: 1rem;
            font-weight: bold;
        }
    }
}
</style>