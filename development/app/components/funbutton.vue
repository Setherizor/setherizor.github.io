<template>
  <v-flex md6 sm10 xs12 offset-md3 offset-sm1 offset-xs0>
    <button @click="$store.commit('toggleFun')" :class="{ 'start-fun': fun, 'fun-btn': true }">Press for Fun!</button>
  </v-flex>
</template>

<script>
export default {
  name: "funbutton",
  computed: {
    fun() {
      return this.$store.state.funColors;
    }
  },
};
</script>

<style>
.fun-btn {
  /* change bg color to get different hues    */
  background-color: salmon;
  color: white;
  padding: 2em 3em;
  border: none;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  border-radius: 5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  outline: none;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  cursor: pointer;
  font-weight: bold;
}
.fun-btn:hover {
  -webkit-animation: random-bg 0.5s linear infinite, grow 1300ms ease infinite;
  animation: random-bg 0.5s linear infinite, grow 1300ms ease infinite;
}
.fun-btn1 {
  /* change bg color to get different hues    */
  background-color: salmon;
  color: white;
  padding: 2em 3em;
  border: none;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  border-radius: 5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  outline: none;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  cursor: pointer;
  font-weight: bold;
}
.fun-btn1:hover {
  -webkit-animation: random-bg 0.5s linear infinite, grow 1300ms ease infinite;
  animation: random-bg 0.5s linear infinite, grow 1300ms ease infinite;
}
.start-fun {
  background-color: #fff !important;
  /* change color of button text when fun is started   */
  color: salmon !important;
}

/* pulsating effect on button */
@-webkit-keyframes grow {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes grow {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>