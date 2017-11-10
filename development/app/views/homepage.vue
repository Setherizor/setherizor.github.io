<template>
  <v-app v-cloak :dark="dark" :light="!dark">
      <hero></hero>
      <main :class="{ page, 'color-bg-start': fun, 'bg-animate-color': fun }">
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
import { hero, info, customFooter } from "../components";
export default {
  name: "Homepage",
  data() {
    return {
      dark: this.$store.state.dark,
      buttons: this.$store.state.buttons
    };
  },
  computed: {
    fun() {
      return this.$store.state.funColors;
    }
  },
  components: { hero, info, customFooter }
};
</script>