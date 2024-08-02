<template>
  <div class="main-content" style="background-image: url('/images/it-bg.jpg');">
    <h2>IT事業ブログ</h2>
    <ul>
      <li v-for="blog in filteredBlogs" :key="blog.id">
        <router-link :to="{ name: 'ITBlogDetail', params: { id: blog.id } }">{{ blog.title }}</router-link>
        <p>{{ blog.date }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { blogs } from '../data/blogs.js';

export default {
  name: 'ITBlogList',
  data() {
    return {
      blogs
    };
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter(blog => blog.category === 'IT');
    }
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 20px;
}
li a {
  color: #1e90ff; /* 明るいブルー */
  text-decoration: none;
}
li a:hover {
  color: #f39c12; /* オレンジ */
}
</style>
