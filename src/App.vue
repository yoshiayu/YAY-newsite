<template>
  <div id="app">
    <AppHeader @toggleSidebar="toggleSidebar" />
    <div class="main">
      <AppSidebar :sidebarVisible="sidebarVisible" @closeSidebar="toggleSidebar" />
      <div class="content">
        <router-view class="main-content"></router-view>
      </div>
    </div>
    <button v-if="showButton" @click="scrollToTop" class="scroll-top-button">▲</button>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppSidebar from './components/AppSidebar.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSidebar
  },
  data() {
    return {
      showButton: false,
      sidebarVisible: false
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    checkScroll() {
      this.showButton = window.scrollY > 200;
    },
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.checkScroll);
  }
}
</script>

<style src="./assets/styles.css"></style>
<style scoped>
.main {
  display: flex;
  flex: 1;
}
.content {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
}
.scroll-top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: #f39c12; /* オレンジ */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
