<template>
  <aside :class="['sidebar', { 'sidebar-show': sidebarVisible }]">
    <button class="close-button" @click="$emit('closeSidebar')">×</button>
    <nav>
      <ul>
        <li><router-link to="/" @click="closeSidebar">HOME</router-link></li>
        <li><router-link to="/it" @click="closeSidebar">IT事業</router-link></li>
        <li><router-link to="/drone" @click="closeSidebar">ドローン事業</router-link></li>
        <li><router-link to="/pricing" @click="closeSidebar">価格表</router-link></li>
        <li><router-link to="/company" @click="closeSidebar">会社概要</router-link></li>
        <li><router-link to="/contact" @click="closeSidebar">お問い合わせ</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'AppSidebar',
  props: {
    sidebarVisible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeSidebar() {
      this.$emit('closeSidebar');
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 180px; /* 幅を減らしました */
  background-color: rgba(44, 62, 80, 0.9); /* 半透明に設定 */
  color: #ecf0f1;
  padding: 10px;
  position: fixed;
  top: 60px; /* Adjusted height for the header */
  left: 0;
  height: calc(100vh - 60px); /* Adjusted height for the header */
  overflow-y: auto;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: transform 0.3s ease;
  transform: translateX(-100%);
}

.sidebar-show {
  transform: translateX(0);
}

.close-button {
  background: none;
  border: none;
  font-size: 20px;
  color: #ecf0f1;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
.close-button:hover {
  color: #bdc3c7;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin: 15px 0;
}

nav ul li a {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 18px;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
