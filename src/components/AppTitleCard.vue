<template>
    <v-flex>
        <v-card>
            <v-layout>
                <v-flex align-self-center>
                    <v-card-text class="title">
                        <span>Budget: {{budget}}</span>
                        <v-btn fab small flat>
                            <v-icon>edit</v-icon>
                        </v-btn>
                    </v-card-text>
                </v-flex>
                <v-flex d-flex>
                     <v-card-text >
                        <div class="display-1 text-md-right">{{fullName}}</div>
                    </v-card-text>
                </v-flex>
            </v-layout>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props: {
        fullName: {
            type: String,
            default: ''
        },

        budget: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style>

</style>
