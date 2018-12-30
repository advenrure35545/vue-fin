<template>
    <v-dialog
        v-model="dialog"
    >
        <v-card>
            <v-card-title class="headline">Add cost</v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field
                        v-model="title"
                        label="Title"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="value"
                        label="Value"
                        required=""
                    ></v-text-field>
                    <v-text-field
                        v-model="category"
                        label="Category"
                    ></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn
                flat
                fab
                 @click="closeModal">
                    Close
                </v-btn>
                <v-btn
                    flat
                    color="primary"
                    @click="saveCost"
                >
                    Save 
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props: {
        dialog: {
            type: Boolean,
            default: false 
        }
    },

    data(){
        return {
            title: "",
            value: 0,
            category: ""
        }
    },

    methods: {
        ...mapActions([
            'addCost'
        ]),
        
        closeModal(){
            this.$emit('closeModal')        
        },

        saveCost(){
            this.addCost({title: this.title, value: this.value, category: this.category})
            this.$emit('closeModal')
        }
    },
}
</script>

<style>

</style>
