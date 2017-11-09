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

<style>
#box {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 80%;
  max-width: 650px;
  height: 120px;
  color: white;
  font-family: "Raleway";
  font-size: 2.5rem;
}
.gradient-border {
  --borderWidth: 6px;
  background: #1d1f20;
  position: relative;
  border-radius: var(--borderWidth);
}
.gradient-border:after {
  content: "";
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(
    60deg,
    #f79533,
    #f37055,
    #ef4e7b,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}
@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

