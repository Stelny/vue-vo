<script setup lang="ts">
import { TActivity } from "./../../../types/Activity";

const {
    activity
} = defineProps<{
    activity?: TActivity
}>()

</script>
<template>
    <div class="user-card-stripe" :class="{
        isActivity: activity
    }"
    >
        <template v-if="activity">
            <div class="user-card-stripe-name">
                Zakázkový list č. <b>{{ activity?.orderSheet?.id }}</b>
            </div>
            <div class="user-card-stripe-start">
                od {{ activity.startDate }}
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