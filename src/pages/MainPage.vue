<template>
    <v-flex>
        <v-layout>
            <v-flex xs12>
                <AppTitleCard xs12 :fullName="`${user.firstName} ${user.lastName}`" :budget="user.monthBudget"/>
            </v-flex>
        </v-layout>
        <v-layout class="my-2">
            <v-flex xs6>
                <DayCostsCard :totalCosts="totalCosts" :costs="costs"/>
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>
import AppTitleCard from '../components/AppTitleCard'
import AppSideMenu from '../components/AppSideMenu'
import DayCostsCard from '../components/DayCostsCard'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
    components: {
        AppTitleCard,
        AppSideMenu,
        DayCostsCard
    },

    methods: {
        ...mapActions([
            'fetchCosts'
        ])
    },

    mounted(){
        this.fetchCosts()
    },

    computed: {
        ...mapGetters(['user', 'totalCosts', 'costs'])
    }
}
</script>
