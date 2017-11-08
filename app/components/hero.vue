<template>
  <v-parallax src="assets/hero.jpeg" height="300">
    <v-layout column align-center justify-center class="white--text">
        <div class="gradient-border" id="box">
            {{ author }}
        </div>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  name: "hero",
  data() {
    return {
      author: this.$store.state.author
    };
  }
};
</script>

