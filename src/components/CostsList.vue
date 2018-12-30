<template>
    <v-list>
        <v-list-tile v-for="(cost, index) in costs" :key="index">
            {{cost.title}}
        </v-list-tile>
    </v-list>
</template>

<script>
export default {
    props: {
        costs: {
            type: Array,
            default: []
        }
    }
}
</script>

<style>

</style>
