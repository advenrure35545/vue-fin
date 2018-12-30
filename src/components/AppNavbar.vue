<template>
    <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title @click="$router.push('/')" >Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn to="/profile" flat>Profile</v-btn>
            <v-btn to="/registration" flat>
                Sign Up
            </v-btn>
            <v-btn to="/login" flat>
                Sign In
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
