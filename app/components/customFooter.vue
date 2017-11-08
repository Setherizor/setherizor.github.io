<template>
   <v-footer app>
        <v-flex xs12>
            <div class="white--text text-xs-center">
                {{ author }}  <br> {{ new Date().getFullYear() }}
            </div>
        </v-flex>
    </v-footer>
</template>

<script>
export default {
  name: "customFooter",
  data() {
    return {
      author: this.$store.state.author
    };
  }
};
</script>
