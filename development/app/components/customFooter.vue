<template>
   <v-footer app>
        <v-flex xs12>
            <div class="white--text text-xs-center" v-html="text"></div>
        </v-flex>
    </v-footer>
</template>

<script>
export default {
  name: "CustomFooter",
  data() {
    return {
      text: `${this.$store.state.author} - &copy; ${new Date().getFullYear()}`
    };
  }
};
</script>

<style>
footer {
  font-family: "Raleway";
  letter-spacing: 10px;
  line-height: 2.5em;
  text-align: center;
}
</style>