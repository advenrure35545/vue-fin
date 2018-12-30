<template>
  <v-app>
    <AppNavbar />
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppNavbar from './components/AppNavbar'

export default {
  components: {
    AppNavbar
  }
}
</script>

<style lang="scss">

</style>
