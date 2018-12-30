<template>
    <v-flex>
        <v-card>
            <v-card-title class="d-flex justify-content-between">
                <div class="title">
                    Total costs: {{totalCosts}}
                </div>
                <div class="text-md-right">
                    <v-btn @click.stop="dialog = true" fab  flat>
                        <v-icon>
                            add
                        </v-icon>
                    </v-btn>
                </div>
            </v-card-title>
            <v-card-text>
                <v-list two-line>
                    <v-divider></v-divider>
                    <template v-for="(cost, index) in costs.slice(0, 5)">
                        <v-list-tile
                        :key="cost.title"
                        class="py-2"
                        >
                            <v-list-tile-content>
                                <v-list-tile-title v-text="cost.title"></v-list-tile-title>
                                <v-list-tile-sub-title v-text="cost.value"></v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-btn fab flat>
                                    <v-icon>
                                        edit
                                    </v-icon>
                                </v-btn>
                            </v-list-tile-action> 
                        </v-list-tile>
                        <v-divider :key="index"></v-divider>
                    </template>
                </v-list>
                <div class="list-nav text-md-center">
                    <router-link to="/costs">View more</router-link>
                </div>
            </v-card-text>
            
        </v-card>
        <AppModalCostForm :dialog="dialog" @closeModal="closeModal"/>
    </v-flex>
</template>

<script>
import AppModalCostForm from '../components/AppModalCostForm'

export default {
    components: {
        AppModalCostForm
    },

    data(){
        return {
            dialog: false 
        }
    },

    methods: {
        closeModal(){
            this.dialog = false 
        }
    },

    props: {
        totalCosts: {
            type: Number,
            default: 400
        },
        costs: {
            type: Array,
            default: []
        }
    }
}
</script>

