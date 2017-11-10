<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="stylus">
  @require './styles/main';
</style>

<style>
fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.55s;
}

.fade-enter-active {
  transition-delay: 0.55s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>