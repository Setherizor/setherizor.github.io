<template>
  <div id="parent">
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

<style scoped>
#parent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

#child {
  width: 50%;
  min-width: 200px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}

.fa {
  padding: 5.03vh 0;
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  /* border-radius: 50%;*/
  text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
    0.5px 0.5px 0 #000;
}
/* Add a hover effect if you want */

.fa:hover {
  opacity: 0.7;
}
/* Set a specific color for each brand */

.fa-facebook {
  background: #3b5998;
  color: white;
}

.fa-twitter {
  background: #55acee;
  color: white;
}

.fa-linkedin {
  background: #0077b5;
  color: white;
}

.fa-google-plus {
  background: #d84b37;
  color: white;
}

.fa-medium {
  background: #00ab6b;
  color: white;
}

.fa-code {
  background: #f99a66;
  color: #d55161;
  /*maybe #d55161*/
}

.fa-github {
  background: #6e5494;
  color: white;
}

.fa-snapchat-ghost {
  background: #fffc00;
  color: white;
}

.fa-instagram {
  background: #125688;
  color: white;
}

.fa-codepen {
  background: black;
  color: white;
}

.fa-desktop {
  background: black;
  color: white;
}
</style>
