<template>
    <v-flex>
        <form>
            <v-text-field
                v-model= "email"
                label= "Email"
                required
            >
            </v-text-field>
            <v-text-field
                v-model="password"
                label="Password"
                counter="6"
            >
            </v-text-field>
            <v-btn
                flat
            >
                Close
            </v-btn>
            <v-btn
                flat
                color="primary"
            >
                Next
            </v-btn>
        </form>
    </v-flex>
</template>

<script>
export default {

}
</script>

<style>

</style>
