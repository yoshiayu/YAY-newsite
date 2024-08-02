<template>
  <header>
    <button class="toggle-button" @click="$emit('toggleSidebar')">≡</button>
    <h1>合同会社YAY</h1>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
header {
  background-color: #1e90ff; /* 明るいブルー */
  color: #fff;
  padding: 10px;
  text-align: center;
  position: relative;
  font-family: 'Montserrat', sans-serif; /* タイトル用フォント */
  font-weight: bold;
}
.toggle-button {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}
.toggle-button:hover {
  color: #ddd;
}
</style>
