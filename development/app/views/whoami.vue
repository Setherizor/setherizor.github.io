<template>
  <div id="parent">
    <link rel="stylesheet" type="text/css" href="css/wai.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <a v-for="(s, index) in sites" :key="index" :href="s.url" rel="noopener" id="child" :class="getIcon(index)"></a>
  </div>
</template>

<script>
const websites = [
  {
    name: "Facebook",
    url: "facebook.com/TheSethParrish",
    icon: "fa-facebook"
  },
  {
    name: "Twitter",
    url: "twitter.com/Setherizor",
    icon: "fa-twitter"
  },
  {
    name: "Medium",
    url: "medium.com/@Setherizor",
    icon: "fa-medium"
  },
  {
    name: "Snapchat",
    url: "www.snapchat.com/add/Setherizor",
    icon: "fa-snapchat-ghost"
  },
  {
    name: "Instagram",
    url: "www.instagram.com/Setherizor/",
    icon: "fa-instagram"
  },
  {
    name: "Linkedin",
    url: "www.linkedin.com/in/thesethparrish/",
    icon: "fa-linkedin"
  },
  {
    name: "Google Plus",
    url: "plus.google.com/+SethParrishTime",
    icon: "fa-google-plus"
  },
  {
    name: "Codepen",
    url: "codepen.io/Setherizor",
    icon: "fa-codepen"
  },
  {
    name: "Github",
    url: "github.com/Setherizor",
    icon: "fa-github"
  },
  {
    name: "Devrant",
    url: "www.devrant.io/users/Setherizor",
    icon: "fa-code"
  },
  {
    name: "Personal Site",
    url: "/#/",
    icon: "fa-desktop"
  }
];

export default {
  name: "WhoAmI",
  data() {
    return {
      sites: websites
    };
  },
  methods: {
    getIcon(idx) {
      return `fa ${this.sites[idx].icon} fa-3x`;
    }
  }
};
</script>