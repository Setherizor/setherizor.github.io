<template>
  <v-app v-cloak :dark="dark" :light="!dark">
      <hero></hero>
        <v-content :class="{ page, 'color-bg-start': funColors, 'bg-animate-color': funColors }">
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
    </v-app>
</template>

<script>
import { mapState } from "vuex";
import { hero, info, customFooter } from "../components";
export default {
  name: "Homepage",
  computed: mapState(["dark", "buttons", "funColors"]),
  components: { hero, info, customFooter }
};
</script>