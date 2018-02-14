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
  name: "PersonalInfo",
  data() {
    return {
      text: {
        favquote: "The Only Day Wasted, Is One In Which You Make Nobody Smile",
        intro:
          "I’m one of those people that is obsessed with making things better. I see every failure as a chance to learn and grow. When I look outside, I see the world full of opportunities, technology, and beauty! I actively look for problems (but I am not a pessimist), this is because I’m a doer, a maker, and a helper! I was born in Knoxville Tennesee, on a brisk fall day (as my parents recall to me). After that, I was raised in Arkansas and Georgia, and am now loving North Carolina! I spent my youth biking with friends, walking on beaches, and adventuring. From a young age, I have been facinated by computers and their fantastical ability to enable and connect people. I have spent my time since, shooting pictures, designing websites, mocking up interfaces, taking on projects one after another, managing a website for a famiy business, gaming, and further exploring how I can enable and connect people in this amazing world.",
        quote1:
          "Born in Tennessee, raised in Arkansas and Georgia, and am now loving North Carolina!",
        quote2: "The Internet has given me the keys to the 'whole crazy world'",
        outro:
          "The Internet has connected me to people who share my passions and understand my missions. It has given me the keys to the whole crazy world and all I have needed is the desire to discover. At the core of everything I’ve done, and continue to do, is communication of all forms, technology, a will to help others, and diligence."
      }
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
  border-left: 5px solid #4eebfc;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
