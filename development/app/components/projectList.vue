<template>
  <v-layout row wrap>
    <v-flex xs12 v-for="c in cards" :key="c.id">
      <v-card :color="randColor()" class="white--text">
          <v-card-title primary-title>
              <div class="headline" style="width: 100%;" v-html="c.name"></div>
              <span v-html="c.desc"></span>
          </v-card-title>
          <v-card-actions>
            <v-layout row wrap>
              <v-flex xs12>
                <v-btn v-for="(url, index) in c.urls" :key="index" color="primary" :href="url">
                    {{ url.substr(url.lastIndexOf("/") + 1) || "Project" }}
                </v-btn>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "projectList",
  data() {
    return {
      cards: []
    };
  },
  mounted() {
    fetch(`https://oex.glitch.me/seth/projects`)
      .then(resp => resp.json())
      .then(data => (this.cards = data));
  },
  methods: {
    randColor: () => {
      const colors = [
        "blue-grey darken-2",
        "cyan darken-2",
        "purple",
        "pink",
        "red lighten-1",
        "deep-purple lighten-2",
        "light-blue lighten-2",
        "green accent-3",
        "brown lighten-2"
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }
};
</script>
