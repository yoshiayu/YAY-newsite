<template>
    <div class="main-content" style="background-image: url('/images/drone-bg.jpg');">
      <h2>ドローン事業ブログ</h2>
      <ul>
        <li v-for="blog in filteredBlogs" :key="blog.id">
          <router-link :to="{ name: 'DroneBlogDetail', params: { id: blog.id } }">{{ blog.title }}</router-link>
          <p>{{ blog.date }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { blogs } from '../data/blogs.js';
  
  export default {
    name: 'DroneBlogList',
    data() {
      return {
        blogs
      };
    },
    computed: {
      filteredBlogs() {
        return this.blogs.filter(blog => blog.category === 'Drone');
      }
    }
  }
  </script>
  
  <style scoped>
  .main-content {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 20px;
  }
  </style>
  