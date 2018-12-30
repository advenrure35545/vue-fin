<template>
    <v-flex xs6>
        <v-form ref="form">
            <div class="display-1">Registration</div>
            <v-stepper v-model="e1">
                <v-stepper-header>
                    <v-stepper-step :complete="e1 > 1" step="1">Step 1</v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step :complete="e1 > 2" step="2">Step 2</v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                    <v-stepper-content step="1">
                        <v-card>
                            <form>
                                <v-text-field
                                    v-model="email"
                                    label="Email"
                                    required
                                ></v-text-field>
                                <v-text-field
                                    v-model="password"
                                    label="Password"
                                    required
                                ></v-text-field>
                            </form>
                        </v-card>
                    </v-stepper-content>
                    <v-stepper-content step="2">
                        <v-card>
                            <form>
                                <v-text-field
                                    v-model="firstName"
                                    label="First name"
                                    required
                                ></v-text-field>
                                <v-text-field
                                    v-model="lastName"
                                    label="Last Name"
                                    required
                                ></v-text-field>
                                <div class="title">Birth Date</div>
                                <v-date-picker v-model="picker"></v-date-picker>
                            </form>

                        </v-card>
                    </v-stepper-content>
                
                </v-stepper-items>

            </v-stepper>
            <v-btn
                flat
            >
                Close
            </v-btn>
            <v-btn
                flat
                color="primary"
                @click="submit"
                v-if="e1 < 2"
            >
                Next
            </v-btn>
            <v-btn
                flat
                color="green"
                @click="save"
                v-if="e1 == 2"
            >
                Save
            </v-btn>
        </v-form>
    </v-flex>
</template>

<script>
export default {
    data(){
        return {
            picker: null,
            e1: 0,
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    },

    methods: {
        submit(){
            if(this.$refs.form.validate()){
              this.e1 ++
            }
        },

        save(){
            
        }
    }
}
</script>

<style>

</style>
