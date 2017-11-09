<template>
  <v-app v-cloak :dark="dark" :light="!dark">
      <hero></hero>
      <main>
        <v-content>
          <info></info>
          <v-container class="text-xs-center" fluid>
            <transition name="fade">
              <router-view></router-view>
            </transition>            
            <br>
            <br>
            <v-btn v-for="b in buttons" :key="b.index" color="primary" dark round large :href=b.url target="_self" rel="noopener">
              {{ b.name }} 
            </v-btn>
          </v-container>
          <customFooter></customFooter>
        </v-content>
      </main>
    </v-app>
</template>

<script>
import { hero, info, customFooter } from "./components";
export default {
  name: "App",
  data() {
    return {
      dark: this.$store.state.dark,
      buttons: this.$store.state.buttons
    };
  },
  components: { hero, info, customFooter }
};
</script>

<style>
fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.55s;
}

.fade-enter-active {
  transition-delay: 0.55s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>