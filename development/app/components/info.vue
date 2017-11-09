<template>
  <v-flex md6 sm10 xs12 offset-md3 offset-sm1 offset-xs0>
      <v-card class="elevation-0 transparent">
          <v-card-text class="subheading">
              <blockquote>{{ text.favquote }}</blockquote>
              <div><p>{{ text.intro }}</p></div>
              <blockquote>{{ text.quote1 }}</blockquote>
              <v-card-media src="assets/UwharrieClouds.jpg" height="200px">
              </v-card-media> <br>
              <div><p>{{ text.outro }}</p></div>
              <blockquote>{{ text.quote2 }}</blockquote>
          </v-card-text>
      </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "info",
  data() {
    return {
      text: this.$store.state.text
    };
  }
};
</script>

<style>
blockquote {
  margin: 10px 0;
  font-size: 2em;
  letter-spacing: 1px;
  text-align: center;
  font-family: "Raleway";
  line-height: 1.3;
  font-style: italic;
  background: repeating-linear-gradient(45deg, #ff1c42 0%, #9036ff 100%);
  font-weight: 900;
  border-left: 5px solid var(--secondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
