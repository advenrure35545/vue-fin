<template>
    <v-flex>
        <v-layout>
            <v-flex>
                <div class="display-1">
                Costs 
                </div>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex>
                <CostsList :costs="costs" />
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>
import CostsList from '../components/CostsList'
import {mapGetters} from 'vuex'

export default {
    components: {
        CostsList
    },

    computed: {
        ...mapGetters([
            'costs'
        ])
    }
}
</script>

<style>

</style>
