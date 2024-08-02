<template>
  <div class="main-content" style="background-image: url('/images/it-bg.jpg');">
    <h2>{{ blog.title }}</h2>
    <p>{{ blog.date }}</p>
    <p>{{ blog.content }}</p>
    <router-link to="/it-blog">ブログ一覧に戻る</router-link>
  </div>
</template>

<script>
import { blogs } from '../data/blogs.js';

export default {
  name: 'ITBlogDetail',
  data() {
    return {
      blog: null
    };
  },
  created() {
    const blogId = this.$route.params.id;
    this.blog = blogs.find(blog => blog.id == blogId);
  }
}
</script>

<style scoped>
.main-content {
  background-color: rgba(255, 255, 255, 0.9); /* ホワイト */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Lato', sans-serif;
}
h2 {
  font-family: 'Montserrat', sans-serif; /* タイトル用フォント */
  font-weight: bold;
  color: #1e90ff; /* 明るいブルー */
}
a {
  color: #1e90ff; /* 明るいブルー */
  text-decoration: none;
}
a:hover {
  color: #f39c12; /* オレンジ */
}
</style>
